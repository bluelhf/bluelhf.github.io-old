import svelte from 'rollup-plugin-svelte';
import copy from "rollup-plugin-copy";
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';
import { wasm } from '@rollup/plugin-wasm';


import { visualizer } from 'rollup-plugin-visualizer';

var glob = require("glob");

const production = !process.env.ROLLUP_WATCH;

function serve() {
	let server;

	function toExit() {
		if (server) server.kill(0);
	}

	return {
		writeBundle() {
			if (server) return;
			server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			});

			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		}
	};
}


export default {
	input: ['src/home/home.js', 'src/paste/paste.js'],
	output: {
		sourcemap: true,
		format: 'es',
		name: 'app',
		dir: 'public/dist/'
	},
    external: glob.sync("**/utils/**", {cwd: 'public'}).map(s => "/" + s),
	plugins: [
		svelte({
			compilerOptions: {
				// enable run-time checks when not in production
				dev: !production
			}
		}),
		// copy our assets, too
		copy({
            targets: [
                { src: 'src/paste/assets', 'dest': 'public/dist/paste/' },
                { src: 'src/paste/utils', 'dest': 'public/dist/paste/' },
                { src: 'src/home/assets', 'dest': 'public/dist/home/' },
                { src: 'src/home/utils', 'dest': 'public/dist/home/s' },     
            ]
		}),

		// we'll extract any component CSS out into
		// a separate file - better for performance
		wasm(),
		css({ output: 'bundle.css' }),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		commonjs(), visualizer(),
		// In dev mode, call `npm run start` once
		// the bundle has been generated
		!production && serve(),

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		!production && livereload('public'),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser()
	],
	watch: {
		clearScreen: false
	}
};
