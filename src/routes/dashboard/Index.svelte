<script>
    import Card from "../../components/Card.svelte";
    import Response from "../../components/Response.svelte";

    let form = {};
    let response = {};

    async function changePassword() {
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
            <Card title="Dashboard" additional="col-span-2">
                Welcome back, barius
            </Card>
            <Card title="Change password">
                <form method="post"
                class="grid grid-cols-1 mt-2"
                on:submit|preventDefault={changePassword} >
                    <Response status={response.status} message={response.message} />
                        <input
                            type="password"
                            placeholder="Old password"
                            class="w-80 bg-neutral-800 outline-none text-sm px-2 py-px rounded-lg"
                            bind:value={form.old_password}
                            required
                        />
                        <input
                            type="password"
                            placeholder="New password"
                            class="w-80 bg-neutral-800 outline-none text-sm px-2 py-px rounded-lg mt-1"
                            bind:value={form.new_password}
                            required
                        />
                        <button type="submit" class="mt-4 px-4 py-px font-bold rounded-lg bg-cyan-500 shadow-lg shadow-cyan-500/60">
                            Change password
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
