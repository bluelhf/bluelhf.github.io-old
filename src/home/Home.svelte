<script>
	export let src, user;
	import ProjectCard from "./ProjectCard.svelte";

    Array.prototype.asyncFilter =function( filterFn) {
       const arr = this;
       return new Promise(function(resolve){
         const booleanArr = [];
         arr.forEach(function (e) { 
            booleanArr.push(filterFn(e))
         })
         Promise.all(booleanArr).then(function (booleanArr) {
           const arr2 = arr.filter(function (e, i) {
             return booleanArr[i]
           })
           resolve(arr2)
         })
       })
    }

	async function fetchProjects() {
        let cacheDeath = window.localStorage.getItem("project-cache-death");
        if (cacheDeath != undefined && Date.now() < cacheDeath) {
            return JSON.parse(window.localStorage.getItem("project-cache"));
        } else {
            try {
                let response = await fetch(`https://api.github.com/users/${user}/repos`, {
                    method: 'GET',
                    referrer: document.URL
                });
                if (!response.ok)
                    throw new Error((await response.json()).message);
                response = await response.json();
                response = await response.asyncFilter(async (project) => {
                    let resp = await fetch(`https://api.github.com/repos/${project.full_name}/contents/README.md`);
                    return resp.ok && !project.fork && !project.name.includes("bluelhf");
                });

                return response;
            } catch (e) {
                console.log(
`${e}

There would usually be a list of my projects on the site,
but something went wrong while fetching the projects,
so they won't be shown.`
                );
                return [];
            }
        }
	}

	let socials = {
		discord: "https://discord.com/users/135726926886207488",
		twitter: "https://twitter.com/IlariSuhonen",
		github: "https://github.com/bluelhf/",
		polywork: "https://poly.work/bluelhf/"
	}

	let promise = fetchProjects();
    promise.then(res => {
        window.localStorage.setItem("project-cache", JSON.stringify(res));
        window.localStorage.setItem("project-cache-death", Date.now() + 7_200_000);
    })
</script>
		
<main>
    <img id="photo" src={src} alt="Ilari Suhonen"/>
    
    <div id="header">
        <h1>hey, i'm ilari 👨‍💻</h1>
        <a class="icon" target="_blank" href={socials.discord}><i class="fab fa-discord" title="@Ilari"></i></a>
        <a class="icon" target="_blank" href={socials.github}><i class="fab fa-github" title="@bluelhf"></i></a>
        <a class="icon" target="_blank" href={socials.twitter}><i class="fab fa-twitter" title="@IlariSuhonen"></i></a>
        <a class="icon" target="_blank" href={socials.polywork}><i class="fas fa-th" title="@bluelhf"></i></a>
    </div>
    <p id="text">
        i'm a {Math.floor((new Date() - new Date('2005-12-21').getTime()) / 3.15576e+10)}-year-old programmer with a particular
        interest in java ☕<br/><br/> i've messed around with all kinds of
        software and written many projects of my own, too.
    </p>

    
    {#await promise}
        <!-- do nothing -->
    {:then projects}
        {#if projects.length != 0}
            <h2>some of my projects</h2>
            {#each projects as project}
                <div>
                    <ProjectCard project={project} />
                </div>
            {/each}
        {:else}
            <p>
                oh no!<br/>
                it looks like my projects failed to load...<br/>
                check the console for any errors!<br/>
            </p>
        {/if}
    {/await}
</main>

<style>

    *:focus {
        transform: scale(1.05);
        outline: none;
        transition: transform 0.05s ease;
        text-shadow: rgba(21, 156, 228, 0.4) 0px 0px 10px;
    }

    a {
        color: rgb(0,100,200);
        text-decoration: underline;
        text-decoration-color: transparent;
        transition: 0.25s;
        -webkit-text-decoration-color: transparent;
        -moz-text-decoration-color: transparent;
    }

    a:hover {
        text-decoration-color:rgb(0,100,200);
        -webkit-text-decoration-color: rgb(0,100,200);
        -moz-text-decoration-color: rgb(0,100,200);
    }


    a:visited {
        color: rgb(0,80,160);
    }

	@media all and (prefers-color-scheme: dark) {
		h1 {
			color: #7FBDDC !important;
		}
	}
	
	@media not all and (prefers-color-scheme: dark) {
		h1 {
			color: rgb(51, 51, 51) !important;
		}
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
        padding-top: 1vh;
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