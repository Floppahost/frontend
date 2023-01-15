<script>
    import { onMount } from "svelte";
    import Card from "../../components/Card.svelte";

    let images = [
        {title: "a", image: "logo.png"},
        {title: "b", image: "logo.png"},
        {title: "c", image: "logo.png"},
        {title: "d", image: "logo.png"}
    ];

    onMount(async () => {
        //...
    })
</script>

<div class="flex h-screen">
    <div class="m-auto">
        <div class="grid grid-cols-2 gap-4">
            {#each images as image}
                <Card title={image.title}>
                    <img src={image.image} alt={image.title} class="w-96 h-auto" />
                </Card>
            {/each}
        </div>
    </div>
</div>
