<script>
    export let href;
    let promise = Promise.resolve([]);
	async function fetchMeta() {
		const response = await fetch("http://api.lhf.blue/preview?url=" + encodeURIComponent(href), {
            "method": "GET"
        });
        await new Promise(resolve => setTimeout(resolve, 500));
        
        return await response.json()
	}
    promise = fetchMeta();
</script>

<div class="card-wrapper">
    <div class="card-template">
        <img src="assets/template.webp" width="300" height="150" />
    </div>
    {#await promise}
    {:then data}
    <div class="card">
        <a href={href}>
            <img src={data.ogImage.url} width={data.ogImage.width} height={data.ogImage.height}/>
        </a>
    </div>
    {/await}
</div>


<style>
.card, .card-template {
    animation: fadeIn 0.5s;
    animation-timing-function: cubic-bezier();
}

.card-wrapper {
    display: grid;
}

.card, .card-template {
    grid-area: 1 / 1;
}



.card img, .card-template img {
    margin: 1%;
    width: calc(max(30vw, 30vh));
    border-radius: 10px;
    height: auto;
    box-shadow: 0px 0px 5px grey;

    transition: all .2s ease-in-out; 
}
.card img:hover {
    transform: scale(1.1);
}
</style>