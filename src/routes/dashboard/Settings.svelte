<script>
    import Card from "../../components/Card.svelte";
    import Response from "../../components/Response.svelte";

    let form = {};
    let response = {};

    async function changeEmbed() {
        let call = await fetch("/route", {
            method: "post",
            body: JSON.stringify(form),
        });

        response = {
            status: call.status,
            message: "alo"
        };
    }

</script>

<div class="flex h-screen">
    <div class="m-auto">
        <div class="grid grid-cols-2 gap-4">
            <Card title="Change embed">
                <form method="post"
                class="grid grid-cols-1 mt-2"
                on:submit|preventDefault={changeEmbed} >
                    <Response status={response.status} message={response.message} />
                        <input
                            type="text"
                            placeholder="Site name"
                            class="w-80 bg-neutral-800 outline-none text-sm px-2 py-px rounded-lg"
                            bind:value={form.sitename}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Embed author"
                            class="w-80 bg-neutral-800 outline-none text-sm px-2 py-px rounded-lg mt-1"
                            bind:value={form.embedauthor}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Embed author url"
                            class="w-80 bg-neutral-800 outline-none text-sm px-2 py-px rounded-lg mt-1"
                            bind:value={form.embedauthorurl}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Embed title"
                            class="w-80 bg-neutral-800 outline-none text-sm px-2 py-px rounded-lg mt-1"
                            bind:value={form.embedtitle}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Embed description"
                            class="w-80 bg-neutral-800 outline-none text-sm px-2 py-px rounded-lg mt-1"
                            bind:value={form.embeddescription}
                            required
                        />
                        <div class="flex w-80 bg-neutral-800 text-sm px-2 py-px rounded-lg mt-1 my-auto">
                            <input
                                type="color"
                                class="h-4 w-4 my-auto"
                                bind:value={form.embedcolor}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Embed color (use hex)"
                                class="outline-none bg-transparent ml-2"
                                bind:value={form.embedcolor}
                                required
                            />
                        </div>
                        <button type="submit" class="mt-4 px-4 py-px font-bold rounded-lg bg-cyan-500 shadow-lg shadow-cyan-500/60">
                            Change embed settings
                        </button>
                </form>
            </Card>
            <Card title="Download config" additional="h-min">
                <button type="submit" class="w-full mt-4 px-4 py-px font-bold rounded-lg bg-cyan-500 shadow-lg shadow-cyan-500/60">
                    Download config
                </button>
            </Card>
        </div>
    </div>
</div>
