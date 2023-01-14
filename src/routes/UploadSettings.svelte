<script>
    import Card from "../components/Card.svelte"
    import Modal from "../components/Modal.svelte";
    import {states} from "../stores";

    let form = {upload: {}, path: {}}

    async function changeUploadSettings() {
        //kroks's work
    }

</script>

<Modal title="Change Upload Preferrences" open={$states.modals.upload}>
    <form method="post" class="grid grid-cols-1 gap-y-2 text-sm mt-1 w-80" on:submit|preventDefault={changeUploadSettings}>
        <input type="text" placeholder="idk bro" class="bg-transparent border border-cyan-400 outline-none px-2 py-1" bind:value={form.upload.path} />
        <button type="submit" class="bg-cyan-400 text-sm px-2 font-semibold py-1 my-auto">Change Upload Preferrences</button>
    </form>
</Modal>

<Modal title="Change Path" open={$states.modals.path}>
    <form method="post" class="grid grid-cols-1 gap-y-2 text-sm mt-1 w-80" on:submit|preventDefault={changeUploadSettings}>
        <input type="text" placeholder="Custom Path" class="bg-transparent border border-cyan-400 outline-none px-2 py-1" bind:value={form.upload.path} />
        <button type="submit" class="bg-cyan-400 text-sm px-2 font-semibold py-1 my-auto">Modify path style</button>
    </form>
</Modal>

<div class="flex h-screen">
    <div class="m-auto w-auto">
        <div class="grid sm:grid-cols-2 grid-cols-1 gap-4 w-full mx-auto">
            <Card title="Upload Preferrences">
                <button on:click={() => $states.modals.upload = true} class="ml-2 bg-cyan-400 text-sm px-2 font-semibold py-1 my-auto">Modify settings</button>
            </Card>
            <Card title="Custom Path Creator">
                <button on:click={() => $states.modals.path = true} class="ml-2 bg-cyan-400 text-sm px-2 font-semibold py-1 my-auto">Change default path</button>
            </Card>
        </div>
    </div>
</div>