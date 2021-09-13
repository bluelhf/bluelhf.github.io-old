<script>
	export let src;
	import ProjectCard from "./ProjectCard.svelte";

	async function fetchProjects() {
		let response = await fetch("https://api.lhf.blue/projects/");
		response = response.json();
		return response;
	}

	let promise = fetchProjects();
</script>


<main>
	<img id="icon" src={src} alt="Ilari Suhonen"/>
	<h1>hey, i'm ilari 👨‍💻</h1>
	<span>
		i'm a {Math.floor((new Date() - new Date('2005-12-21').getTime()) / 3.15576e+10)}-year-old programmer with a particular<br/>
		interest in java ☕<br/><br/> i've messed around with all kinds of<br/>
		software and written many projects of my own, too.<br/>
	</span>
	<br/><br/>
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

	#icon {
		object-fit: cover;
		width: max(30vh, 20vw);
		height: auto;
		border-radius: 50%;
		animation: fadeIn 0.95s;
	}

	:root {
		background-color: var(--main-bg-colour);
	}

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		animation: fadeIn 0.75s;		
	}

	h1 {
		color: #ff3e00;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>