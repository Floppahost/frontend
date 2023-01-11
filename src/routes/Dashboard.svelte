<script>
    import Card from "../components/Card.svelte"
    import Modal from "../components/Modal.svelte";
    import {states} from "../stores"

    let form = {embed: {}, file: {}, password: {}}

    async function changeEmbedSettings() {
        //kroks's work
    }

    async function deleteFile() {
        //kroks's work
    }

    async function changePassword() {
        //kroks's work
    }
</script>

<Modal title="Change embed settings" open={$states.modals.embed}>
    <form method="post" class="grid grid-cols-1 gap-y-2 text-sm mt-1 w-80" on:submit|preventDefault={changeEmbedSettings}>
        <input type="text" placeholder="Site name" class="bg-transparent border border-cyan-400 outline-none px-2 py-1" bind:value={form.embed.sitename} />
        <input type="text" placeholder="Site name URL" class="bg-transparent border border-cyan-400 outline-none px-2 py-1" bind:value={form.embed.sitenameurl} />
        <input type="text" placeholder="Author" class="bg-transparent border border-cyan-400 outline-none px-2 py-1" bind:value={form.embed.author} />
        <input type="text" placeholder="Author URL" class="bg-transparent border border-cyan-400 outline-none px-2 py-1" bind:value={form.embed.authorurl} />
        <input type="text" placeholder="Title" class="bg-transparent border border-cyan-400 outline-none px-2 py-1" bind:value={form.embed.title} />
        <input type="text" placeholder="Description" class="bg-transparent border border-cyan-400 outline-none px-2 py-1" bind:value={form.embed.description} />
        <button type="submit" class="bg-cyan-400 text-sm px-2 font-semibold py-1 my-auto">Change embed</button>
    </form>
</Modal>

<Modal title="Delete a file" open={$states.modals.file}>
    <form method="post" class="grid grid-cols-1 gap-y-2 text-sm mt-1 w-80" on:submit|preventDefault={deleteFile}>
        <input type="text" placeholder="File" class="bg-transparent border border-cyan-400 outline-none px-2 py-1" bind:value={form.file.name} />
        <button type="submit" class="bg-cyan-400 text-sm px-2 font-semibold py-1 my-auto">Delete a file</button>
    </form>
</Modal>

<Modal title="Change password" open={$states.modals.password}>
    <form method="post" class="grid grid-cols-1 gap-y-2 text-sm mt-1 w-80" on:submit|preventDefault={changePassword}>
        <input type="password" placeholder="Old password" class="bg-transparent border border-cyan-400 outline-none px-2 py-1" bind:value={form.password.old} />
        <input type="password" placeholder="New password" class="bg-transparent border border-cyan-400 outline-none px-2 py-1" bind:value={form.password.new} />
        <button type="submit" class="bg-cyan-400 text-sm px-2 font-semibold py-1 my-auto">Change password</button>
    </form>
</Modal>

<div class="flex h-screen">
    <div class="m-auto md:w-4/5 xl:w-1/3 w-full">
        <div class="grid sm:grid-cols-2 grid-cols-1 gap-4 w-full mx-auto">
            <Card title="Account">
                Welcome back <b>barius</b>
                <button on:click={() => $states.modals.password = true} class="ml-2 bg-cyan-400 text-sm px-2 font-semibold py-1 my-auto">Change password</button>
            </Card>
            <Card title="Settings">
                <button on:click={() => $states.modals.embed = true} class="bg-cyan-400 text-sm px-2 font-semibold py-1 my-auto">Change embed settings</button>
                <button on:click={() => $states.modals.file = true} class="bg-cyan-400 text-sm px-2 font-semibold py-1 my-auto">Delete a file</button>
            </Card>
        </div>
    </div>
</div>
