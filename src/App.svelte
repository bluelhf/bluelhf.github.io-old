<script>
	export let src;
	import ProjectCard from "./ProjectCard.svelte";

	async function fetchProjects() {
		let response = await fetch("https://api.lhf.blue/projects/");
		response = response.json();
		return response;
	}

	let socials = {
		discord: "https://discord.com/users/135726926886207488",
		twitter: "https://twitter.com/IlariSuhonen",
		github: "https://github.com/bluelhf/"
	}


	let promise = fetchProjects();
</script>


<main>
	<img id="photo" src={src} alt="Ilari Suhonen"/>
	
	<div id="header">
		<h1>hey, i'm ilari 👨‍💻</h1>
		<a class="icon" target="_blank" href={socials.discord}><i class="fab fa-discord" title="@Ilari"></i></a>
		<a class="icon" target="_blank" href={socials.github}><i class="fab fa-github" title="@bluelhf"></i></a>
		<a class="icon" target="_blank" href={socials.twitter}><i class="fab fa-twitter" title="@IlariSuhonen"></i></a>
	</div>
	<p id="text">
		i'm a {Math.floor((new Date() - new Date('2005-12-21').getTime()) / 3.15576e+10)}-year-old programmer with a particular
		interest in java ☕<br/><br/> i've messed around with all kinds of
		software and written many projects of my own, too.
	</p>

	<h2>some of my projects</h2>
	{#await promise}
		<!-- do nothing -->
	{:then projects}
		{#each projects as project}
			<div>
				<ProjectCard href={project.html_url} />
			</div>
		{/each}
	{/await}
</main>

<style>

	h1 {
		color: #7FBDDC !important;
	}

	.icon i {
		color: var(--main-bg-colour);
		filter: invert();
		margin: 0 .5em;
		
		transition: all .2s ease-in-out;
	}

	
	.icon i:hover {
		transform: rotateZ(12deg);
	}

	#header {
		margin-bottom: 3vh;
	}

	#header h1 {
		margin-bottom: 0;
		font-size: calc(max(5vw, 5vh));
	}

	#text {
		margin: 0 auto;
		max-width: 30em;
	}

	#photo {
		object-fit: cover;
		width: max(20vh, 20vw);
		height: auto;
		border-radius: 50%;
		animation: fadeIn 0.95s;
		margin: 0 auto;
	}

	:root {
		background-color: var(--main-bg-colour);
	}

	main {
		display: grid;
		max-width: 100%;
		margin: 0 auto;
		align-items: center;
		display: grid;
		animation: fadeIn 0.75s;	
		
		text-align: center;
	}

	h1 {
		color: #ff3e00;
		font-size: 4em;
		font-weight: 100;
	}
</style>