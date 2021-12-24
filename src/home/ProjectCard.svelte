<script>
    export let project;
    let promise = Promise.resolve([]);
	async function fetchMeta() {
        try {
            const response = await fetch(`https://opengraph.githubassets.com/1/${project.full_name}`, {
                "method": "GET"
            });
            return response.body;
        } catch (e) {
            return {};
        }
	}
    promise = fetchMeta();
</script>

<div class="card-wrapper">
    <div class="card-template">
        <img alt="" src="/dist/home/assets/template.webp" width="300" height="150" />
    </div>
    <div class="card">
        <a href={project.html_url}>
            <img alt="" src={`https://opengraph.githubassets.com/1/${project.full_name}`}/>
        </a>
    </div>

</div>


<style>
.card, .card-template {
    animation: fadeIn 0.5s;
    animation-timing-function: cubic-bezier();
}

@media all and (prefers-color-scheme: dark) {
    .card img, .card-template img {
        box-shadow: 0px 0px 5px grey;
    }
}

@media not all and (prefers-color-scheme: dark) {
    .card img, .card-template img {
        box-shadow: 0px 0px 5px #eeeeee;
    }
}

.card-wrapper {
    display: grid;
}

.card, .card-template {
    grid-area: 1 / 1;
}

.card img, .card-template img {
    margin: 1%;
    max-width: 85vw;
    margin: 0 0 1em 0;
    width: 30em;
    border-radius: 10px;
    height: auto;
    

    transition: all .2s ease-in-out; 
}

.card img:hover, .card-template img:hover {
    transform: scale(1.1);
}

</style>