import Home from './Home.svelte';

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

let pastVW = [window.outerWidth, window.outerWidth];
setInterval(() => {
	if (window.outerWidth != pastVW[0] && window.outerWidth == pastVW[1]) {
		console.log("The size of the viewport has changed without a reload.\nThis fucks with the vw unit on some browsers for some reason.\nReloading to accommodate.");
		location.reload();
	}
	pastVW[0] = pastVW[1];
	pastVW[1] = window.outerWidth;
}, 100);

const home = new Home({
	target: document.body,
	props: {
		src: '/dist/home/assets/picrew.webp',
        user: 'bluelhf'
	}
});

export default home;