<script>
    import { onMount } from "svelte";

    let file = {};

    onMount(async () => {
        // ...
    })
</script>

<div class="flex h-screen">
    <div class="m-auto">
        <div class="p-4 bg-neutral-800/75 rounded-3xl">
            <img src={file.url} alt={file.name} class="rounded-3xl" />
            <div class="text-left">
                <p class="font-extrabold text-3xl">{file.name}</p>
                <p>File size: <b>1.32 kB</b></p>
                <p>Uploaded by: <b>birus</b></p>
                <p>Uploaded on: <b>1.1.2023</b> at <b>12:00:00</b></p>
            </div>
        </div>
    </div>
</div>
