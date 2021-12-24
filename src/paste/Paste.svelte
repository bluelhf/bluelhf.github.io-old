<script>

    import { onMount } from 'svelte'
    
    import * as b64 from './utils/b64.js';
    const encoder = new TextEncoder(), decoder = new TextDecoder();

    import 'codemirror/mode/clike/clike'
    import 'codemirror/mode/clojure/clojure'
    import 'codemirror/mode/cmake/cmake'
    import 'codemirror/mode/cobol/cobol'
    import 'codemirror/mode/coffeescript/coffeescript'
    import 'codemirror/mode/css/css'
    import 'codemirror/mode/dart/dart'
    import 'codemirror/mode/dockerfile/dockerfile'
    import 'codemirror/mode/erlang/erlang'
    import 'codemirror/mode/fortran/fortran'
    import 'codemirror/mode/go/go'
    import 'codemirror/mode/groovy/groovy'
    import 'codemirror/mode/haskell/haskell'
    import 'codemirror/mode/htmlmixed/htmlmixed'
    import 'codemirror/mode/javascript/javascript'
    import 'codemirror/mode/julia/julia'
    import 'codemirror/mode/lua/lua'
    import 'codemirror/mode/markdown/markdown'
    import 'codemirror/mode/pascal/pascal'
    import 'codemirror/mode/perl/perl'
    import 'codemirror/mode/php/php'
    import 'codemirror/mode/powershell/powershell'
    import 'codemirror/mode/python/python'
    import 'codemirror/mode/r/r'
    import 'codemirror/mode/ruby/ruby'
    import 'codemirror/mode/rust/rust'
    import 'codemirror/mode/shell/shell'
    import 'codemirror/mode/sql/sql'
    import 'codemirror/mode/swift/swift'
    import 'codemirror/mode/toml/toml'
    import 'codemirror/mode/verilog/verilog'
    import 'codemirror/mode/vb/vb'
    import 'codemirror/mode/xml/xml'
    import 'codemirror/mode/yaml/yaml'

    const guessPatchMap = {
        'rs': 'text/rust',
        'ts': 'text/typescript',
        'jl': 'text/x-julia',
        'js': 'text/javascript',
        //'bat': 'text/batch' not supported
        'cpp': 'text/c++hdr',
        'pm' : 'text/x-perl',
        'kt': 'text/x-kotlin',
        'erl': 'text/x-erlang',
        'cs': 'text/x-csharp',
        //'ml': 'text/ocaml' not supported
        //'prolog': 'text/prolog' not supported
        //'ini': 'text/ini' not supported
        //'asm': 'text/assembly' not supported
        'md': 'text/x-markdown',
        'r': 'text/x-rsrc',
        'hs': 'text/x-haskell',
        'vba': 'text/x-vb',
        'ps1': 'text/x-powershell',
        'v': 'text/x-verliog',
        'clj': 'text/x-clojure',
        //'tex': 'text/latex' not supported
        'pas': 'text/x-pascal',
        'rb': 'text/x-ruby',
        'py': 'text/x-python',
        //'ex': 'text/x-elixir' not supported
        //'csv': 'text/csv' not supported
        'coffee': 'text/x-coffeescript',
        'mm': 'text/objectivec++',
        //'lisp': 'text/lisp' not supported
        'f90': 'text/x-fortran',
        //'matlab': 'text/matlab' not supported
        //'dm': 'text/x-dm' not supported
        'cbl': 'text/x-cobol',
        //'makefile': 'text/makefile' not supported
    }

    import 'codemirror/addon/edit/closebrackets'
    import 'codemirror/addon/search/search'
    import 'codemirror/addon/dialog/dialog'
    import 'codemirror/addon/dialog/dialog.css'
    import * as CodeLinks from './utils/codemirror-links.js'

    import "codemirror/theme/seti.css"
    import "codemirror/theme/duotone-light.css"

    import "codemirror/addon/edit/matchbrackets"
    import CodeMirror from 'codemirror/lib/codemirror'

    export let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? "seti" : "duotone-light";

    onMount(async () => {
        let editor = CodeMirror(document.getElementById("code-container"),
                {
                    lineNumbers: true,
                    indentUnit: 4,
                    firstLineNumber: 0,
                    inputStyle: "contenteditable",
                    lineWiseCopyCut: true,
                    undoDepth: 300,
                    smartIndent: false,
                    mode: 'text/plaintext',
                    theme: theme
                });

        CodeLinks.hyperlinkOverlay(editor);
        run({editor: editor, mimeModes: CodeMirror.mimeModes});
    });

    async function run(state) {
        const Brotli = await import('/dist/paste/utils/brotli/brotli_wasm.js');
        let editor = state.editor;
        let mimeModes = state.mimeModes;

        let last = null;
        let lastTime = 0;
        async function updateLanguage() {
            if (Date.now() - lastTime < 500) return;
            let guess = await guessLanguage(editor, mimeModes);
            if (guess != last) {
                editor.setOption('mode', guess.mode);
                last = guess;
                lastTime = Date.now();
            }
            document.getElementById('lang').innerText = guess.confidence == 0
                ? "¯\\_(ツ)_/¯"
                : guess.mode + "\n" + Math.round(guess.confidence * 1000) / 1000;
        
        }

        editor.on('changes', async () => {
            updateLanguage();
        })

        await Brotli.init(b64.decode);
        
        let text = window.location.href.split("#")[1];
        if (text === undefined) {
            text = `G0sBIIzDOBbcWIRFCCc9iGJb/Upa1BtDK64voWB5C7nf/bMZE1BkkUITkhaFrHidNFlZXa84IaA/KeoFQYBptW6If7bVuCkytFdrOS4Ff7YSYZsD7Z7jfnDkRQDCIaKB12ja500r47+/ChWEh7q9kgsUwVmZuaFOJiHnfdN1JTJa3lONd+LRnKCUKrjpJKoabepaP9eCxykvEB9AfgW4t/E42gfhwjxsVXmROwKxr8GfFIpMBQ==`
        }
        
        b64.decode(text).then(decoded => {
            let decompressed = Brotli.decompress(decoded);
            editor.setValue(decoder.decode(decompressed));
            updateLanguage();
        });
    
        
        
        document.addEventListener('keydown', (event) => {
            if(event.ctrlKey && event.key == "Enter") {
                let data = encoder.encode(editor.getValue());
                b64.encode(Brotli.compress(data)).then(encoded => {
                    window.location.href = window.location.href.split("#")[0] + "#" + encoded;
                });
            }
        });
    }


    let _gli;
    async function getGuessLang() {
        if (typeof GuessLang === 'function') {
            return _gli === undefined ? (_gli = new GuessLang()) : _gli;
        } else {
            var scriptTag = document.createElement('script');
            scriptTag.src = '/dist/paste/utils/guesslang.min.js';


            for (let script of document.head.getElementsByTagName('script')) {
                if (script.src == scriptTag.src) {
                    return await new Promise(async (resolve, reject) => {
                        script.addEventListener('load', () => resolve(_gli === undefined ? (_gli = new GuessLang()) : _gli));
                    });
                }
            }
            
            document.head.appendChild(scriptTag);

            let loadPromise = new Promise(async (resolve, reject) => {
                scriptTag.addEventListener('load', () => resolve(_gli === undefined ? (_gli = new GuessLang()) : _gli));
            });

            return await loadPromise;
        }
    }
    
    async function guessLanguage(editor, modes) {
        let guessLang = await getGuessLang();
        let results = await guessLang.runModel(editor.getValue());
        if (results.length == 0) return {mode: "text/plaintext", confidence: 0};
        let guess = results[0];
        
        let target = guess.languageId.toLowerCase();
        let targets = [target, "x-" + target];
        let scopes = ["application/", "text/"];
        for (let scope of scopes) {
            for (let target of targets) {
                if (`${scope}${target}` in modes) {
                    return {mode: `${scope}${target}`, confidence: guess.confidence};
                }
            }
        }

        if (target in guessPatchMap) {
            return {mode: guessPatchMap[target], confidence: guess.confidence};
        }
        
        return {mode: "text/plaintext", confidence: 0};
    }
</script>

<div id="info" class="cm-s-{theme}">
   <pre><span id="lang" class="cm-type">¯\_(ツ)_/¯</span></pre>
</div>
<div id="code-container" />

<style unscoped>
    :global(#code-container) {
        height: 100% !important;
    }

    #info {
        z-index: 999;
        font-size: 1.5em;
        font-family: monospace;
        filter: opacity(50%);
        text-align: right;

        position: absolute;
        top: 0.5em;
        right: 1em;
    }
    
    #info pre {
        margin: 0;
    }
    
    :root {
        --cm-border-color: #ccc;
        --cm-background-color: #222;
        --cm-medium-color: #ccc;
        --cm-text-color: white;
    }
    
    /* BASICS */
    :global(.CodeMirror) {
        /* Set height, width, borders, and global font properties here */
        font-family: monospace;
        font-size: 1.5em;
        height: 100%;
        direction: ltr;
        color: var(--cm-text-color);
        background: var(--cm-background-color);
    }
    /* PADDING */
    :global(.CodeMirror-lines) {
        padding: 4px 0; /* Vertical padding around content */
    }
    :global(.CodeMirror pre.CodeMirror-line),
    :global(.CodeMirror pre.CodeMirror-line-like) {
        padding: 0 4px; /* Horizontal padding of content */
    }
    :global(.CodeMirror-scrollbar-filler),
    :global(.CodeMirror-gutter-filler) {
        background-color: var(
        --cm-background-color
        ); /* The little square between H and V scrollbars */
    }
    /* GUTTER */
    :global(.CodeMirror-gutters) {
        border-right: 1px solid var(--cm-border-color);
        background-color: var(--cm-background-color);
        white-space: nowrap;
    }
    :global(.CodeMirror-linenumbers) {
    }
    :global(.CodeMirror-linenumber) {
        padding: 0 3px 0 5px;
        min-width: 20px;
        text-align: right;
        color: #ddd;
        white-space: nowrap;
    }
    :global(.CodeMirror-guttermarker) {
        color: var(--cm-text-color);
    }
    :global(.CodeMirror-guttermarker-subtle) {
        color: #999;
    }
    /* CURSOR */
    :global(.CodeMirror-cursor) {
        border-left: 2px solid var(--cm-medium-color);
        border-right: none;
        width: 0;
    }
    /* Shown when moving in bi-directional text */
    :global(.CodeMirror div.CodeMirror-secondarycursor) {
        border-left: 1px solid var(--cm-medium-color);
    }
    :global(.cm-fat-cursor .CodeMirror-cursor) {
        width: auto;
        border: 0 !important;
        background: var(--cursor-color);
    }
    :global(.cm-fat-cursor div.CodeMirror-cursors) {
        z-index: 1;
    }
    :global(.cm-fat-cursor-mark) {
        background-color: var(--cursor-color);
        -webkit-animation: blink 1.06s steps(1) infinite;
        -moz-animation: blink 1.06s steps(1) infinite;
        animation: blink 1.06s steps(1) infinite;
    }
    :global(.cm-animate-fat-cursor) {
        width: auto;
        border: 0;
        -webkit-animation: blink 1.06s steps(1) infinite;
        -moz-animation: blink 1.06s steps(1) infinite;
        animation: blink 1.06s steps(1) infinite;
        background-color: var(--cursor-color);
    }
    @-moz-keyframes blink {
        0% {
        }
        50% {
            background-color: transparent;
        }
        100% {
        }
    }
    @-webkit-keyframes blink {
        0% {
        }
        50% {
            background-color: transparent;
        }
        100% {
        }
    }
    @keyframes blink {
        0% {
        }
        50% {
            background-color: transparent;
        }
        100% {
        }
    }
    /* Can style cursor different in overwrite (non-insert) mode */
    :global(.CodeMirror-overwrite .CodeMirror-cursor) {
    }
    :global(.cm-tab) {
        display: inline-block;
        text-decoration: inherit;
    }
    :global(.CodeMirror-rulers) {
        position: absolute;
        left: 0;
        right: 0;
        top: -50px;
        bottom: 0;
        overflow: hidden;
    }
    :global(.CodeMirror-ruler) {
        border-left: 1px solid var(--cm-medium-color);
        top: 0;
        bottom: 0;
        position: absolute;
    }
    /* DEFAULT THEME */
    :global(.cm-s-default .cm-header) {
        color: blue;
    }
    :global(.cm-s-default .cm-quote) {
        color: #090;
    }
    :global(.cm-negative) {
        color: #d44;
    }
    :global(.cm-positive) {
        color: #292;
    }
    :global(.cm-header),
    :global(.cm-strong) {
        font-weight: bold;
    }
    :global(.cm-em) {
        font-style: italic;
    }
    :global(.cm-link) {
        text-decoration: underline;
    }
    :global(.cm-strikethrough) {
        text-decoration: line-through;
    }
    :global(.cm-s-default .cm-keyword) {
        color: #708;
    }
    :global(.cm-s-default .cm-atom) {
        color: #219;
    }
    :global(.cm-s-default .cm-number) {
        color: #164;
    }
    :global(.cm-s-default .cm-def) {
        color: #00f;
    }
    :global(.cm-s-default .cm-variable),
    :global(.cm-s-default .cm-punctuation),
    :global(.cm-s-default .cm-property),
    :global(.cm-s-default .cm-operator) {
    }
    :global(.cm-s-default .cm-variable-2) {
        color: #05a;
    }
    :global(.cm-s-default .cm-variable-3),
    :global(.cm-s-default .cm-type) {
        color: #085;
    }
    :global(.cm-s-default .cm-comment) {
        color: #a50;
    }
    :global(.cm-s-default .cm-string) {
        color: #a11;
    }
    :global(.cm-s-default .cm-string-2) {
        color: #f50;
    }
    :global(.cm-s-default .cm-meta) {
        color: #555;
    }
    :global(.cm-s-default .cm-qualifier) {
        color: #555;
    }
    :global(.cm-s-default .cm-builtin) {
        color: #30a;
    }
    :global(.cm-s-default .cm-bracket) {
        color: #997;
    }
    :global(.cm-s-default .cm-tag) {
        color: #170;
    }
    :global(.cm-s-default .cm-attribute) {
        color: #00c;
    }
    :global(.cm-s-default .cm-hr) {
        color: #999;
    }
    :global(.cm-s-default .cm-link) {
        color: #00c;
    }
    :global(.cm-s-default .cm-error) {
        color: #f00;
    }
    :global(.cm-invalidchar) {
        color: #f00;
    }
    :global(.CodeMirror-composing) {
        border-bottom: 2px solid;
    }
    /* Default styles for common addons */
    :global(div.CodeMirror span.CodeMirror-matchingbracket) {
        color: #0b0;
    }
    :global(div.CodeMirror span.CodeMirror-nonmatchingbracket) {
        color: #a22;
    }
    :global(.CodeMirror-matchingtag) {
        background: rgba(255, 150, 0, 0.3);
    }
    :global(.CodeMirror-activeline-background) {
        background: #e8f2ff;
    }
    /* STOP */
    /* The rest of this file contains styles related to the mechanics of
    the editor. You probably shouldn't touch them. */
    :global(.CodeMirror) {
        position: relative;
        overflow: hidden;
    }
    :global(.CodeMirror-scroll) {
        overflow: scroll !important; /* Things will break if this is overridden */
        /* 30px is the magic margin used to hide the element's real scrollbars */
        /* See overflow: hidden in .CodeMirror */
        margin-bottom: -30px;
        margin-right: -30px;
        padding-bottom: 30px;
        height: 100%;
        outline: none; /* Prevent dragging from highlighting the element */
        position: relative;
    }
    :global(.CodeMirror-sizer) {
        position: relative;
        border-right: 30px solid transparent;
    }
    /* The fake, visible scrollbars. Used to force redraw during scrolling
    before actual scrolling happens, thus preventing shaking and
    flickering artifacts. */
    :global(.CodeMirror-vscrollbar),
    :global(.CodeMirror-hscrollbar),
    :global(.CodeMirror-scrollbar-filler),
    :global(.CodeMirror-gutter-filler) {
        position: absolute;
        z-index: 6;
        display: none;
    }
    :global(.CodeMirror ::-webkit-scrollbar) {
        width: 8px;
        height: 8px;
    }
    :global(.CodeMirror ::-webkit-scrollbar-track) {
        background: #f4f4f4;
        border-radius: 10px;
    }
    :global(.CodeMirror ::-webkit-scrollbar-thumb) {
        border-radius: 10px;
        background: var(--cm-medium-color);
    }
    :global(.CodeMirror-vscrollbar) {
        right: 0;
        top: 0;
        overflow-x: hidden;
        overflow-y: scroll;
    }
    :global(.CodeMirror-hscrollbar) {
        bottom: 0;
        left: 0;
        overflow-y: hidden;
        overflow-x: scroll;
        height: 8px;
    }
    :global(.CodeMirror-scrollbar-filler) {
        right: 0;
        bottom: 0;
    }
    :global(.CodeMirror-gutter-filler) {
        left: 0;
        bottom: 0;
    }
    :global(.CodeMirror-gutters) {
        position: absolute;
        left: 0;
        top: 0;
        min-height: 100%;
        z-index: 3;
    }
    :global(.CodeMirror-gutter) {
        white-space: normal;
        height: 100%;
        display: inline-block;
        vertical-align: top;
        margin-bottom: -30px;
    }
    :global(.CodeMirror-gutter-wrapper) {
        position: absolute;
        z-index: 4;
        background: none !important;
        border: none !important;
    }
    :global(.CodeMirror-gutter-background) {
        position: absolute;
        top: 0;
        bottom: 0;
        z-index: 4;
    }
    :global(.CodeMirror-gutter-elt) {
        position: absolute;
        cursor: default;
        z-index: 4;
    }
    :global(.CodeMirror-gutter-wrapper ::selection) {
        background-color: transparent;
    }
    :global(.CodeMirror-gutter-wrapper ::-moz-selection) {
        background-color: transparent;
    }
    :global(.CodeMirror-lines) {
        cursor: text;
        min-height: 1px; /* prevents collapsing before first draw */
    }
    :global(.CodeMirror pre.CodeMirror-line),
    :global(.CodeMirror pre.CodeMirror-line-like) {
        /* Reset some styles that the rest of the page might have set */
        -moz-border-radius: 0;
        -webkit-border-radius: 0;
        border-radius: 0;
        border-width: 0;
        background: transparent;
        font-family: inherit;
        font-size: inherit;
        margin: 0;
        white-space: pre;
        word-wrap: normal;
        line-height: inherit;
        color: inherit;
        z-index: 2;
        position: relative;
        overflow: visible;
        -webkit-tap-highlight-color: transparent;
        -webkit-font-variant-ligatures: contextual;
        font-variant-ligatures: contextual;
    }
    :global(.CodeMirror-wrap pre.CodeMirror-line),
    :global(.CodeMirror-wrap pre.CodeMirror-line-like) {
        word-wrap: break-word;
        white-space: pre-wrap;
        word-break: normal;
    }
    :global(.CodeMirror-linebackground) {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 0;
    }
    :global(.CodeMirror-linewidget) {
        position: relative;
        z-index: 2;
        padding: 0.1px; /* Force widget margins to stay inside of the container */
    }
    :global(.CodeMirror-widget) {
    }
    :global(.CodeMirror-rtl pre) {
        direction: rtl;
    }
    :global(.CodeMirror-code) {
        outline: none;
    }
    /* Force content-box sizing for the elements where we expect it */
    :global(.CodeMirror-scroll),
    :global(.CodeMirror-sizer),
    :global(.CodeMirror-gutter),
    :global(.CodeMirror-gutters),
    :global(.CodeMirror-linenumber) {
        -moz-box-sizing: content-box;
        box-sizing: content-box;
    }
    :global(.CodeMirror-measure) {
        position: absolute;
        width: 100%;
        height: 0;
        overflow: hidden;
        visibility: hidden;
    }
    :global(.CodeMirror-cursor) {
        position: absolute;
        pointer-events: none;
    }
    :global(.CodeMirror-measure pre) {
        position: static;
    }
    :global(div.CodeMirror-cursors) {
        /* always show cursor */
        visibility: visible;
        position: relative;
        z-index: 3;
    }
    :global(div.CodeMirror-dragcursors) {
        visibility: visible;
    }
    :global(.CodeMirror-focused div.CodeMirror-cursors) {
        visibility: visible;
    }
    :global(.CodeMirror-selected) {
        background: #d9d9d9;
    }
    :global(.CodeMirror-focused .CodeMirror-selected) {
        background: #d7d4f0;
    }
    :global(.CodeMirror-crosshair) {
        cursor: crosshair;
    }
    :global(.CodeMirror-line::selection),
    :global(.CodeMirror-line > span::selection),
    :global(.CodeMirror-line > span > span::selection) {
        background: #d7d4f0;
    }
    :global(.CodeMirror-line::-moz-selection),
    :global(.CodeMirror-line > span::-moz-selection),
    :global(.CodeMirror-line > span > span::-moz-selection) {
        background: #d7d4f0;
    }
    :global(.cm-searching) {
        background-color: #ffa;
        background-color: rgba(255, 255, 0, 0.4);
    }
    /* Used to force a border model for a node */
    :global(.cm-force-border) {
        padding-right: 0.1px;
    }
    @media print {
        /* Hide the cursor when printing */
        :global(.CodeMirror div.CodeMirror-cursors) {
            visibility: hidden;
        }
    }
    /* See issue #2901 */
    :global(.cm-tab-wrap-hack:after) {
        content: "";
    }
    /* Help users use markselection to safely style text background */
    :global(span.CodeMirror-selectedtext) {
        background: none;
    }
</style>
