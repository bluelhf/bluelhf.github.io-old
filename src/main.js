import App from './App.svelte';

window.addEventListener("load", showPage);

function showPage() {
  	
	let done = 0;
	let total = 0;
	[...document.querySelectorAll('[data-src]')].forEach(img => {
		total++;
		console.log(total);
		img.onload = () => done++;
		img.src = img.dataset.src;
	});

	setInterval(async () => {
		if (done < total) return;
		document.body.classList.remove('js-loading');
	}, 100);
}

const app = new App({
	target: document.body,
	props: {
		src: 'build/assets/ilari.webp'
	}
});

export default app;