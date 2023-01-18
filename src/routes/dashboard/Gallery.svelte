<script>
    import { onMount } from "svelte";
    import Card from "../../components/Card.svelte";
    import FaTrashAlt from 'svelte-icons/fa/FaTrashAlt.svelte'
    import { loggedIn } from "../../stores.js"

    let isLoggedIn = false
    loggedIn.subscribe((v) => {
        isLoggedIn = v
        if (!v) {
            location.href = "/"
        }
    })
    
    let images = [
        {title: "asdasdsadasdaswdwdwdw", image: "logo.png"},
        {title: "b", image: "logo.png"},
        {title: "c", image: "logo.png"},
        {title: "d", image: "logo.png"}
    ];

    onMount(async () => {
        //...
    })
</script>

<div class="flex h-screen">
    {#if isLoggedIn}
    <div class="m-auto">
        <div class="grid grid-cols-2 gap-4">
            {#each images as image}
                <Card title={image.title}>
                    <div slot="header">
                        <button class="rounded-full bg-red-500 w-8 h-8 flex items-center justify-center">
                            <div class="absolute w-4 h-4"><FaTrashAlt/></div>
                        </button>
                    </div>
                    <img src={image.image} alt={image.title} class="w-96 h-auto" />
                </Card>
            {/each}
        </div>
    </div>
    {/if}
</div>
