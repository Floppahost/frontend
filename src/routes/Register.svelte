<script>
    import Response from "../components/Response.svelte";

    let form = {};
    let response = {};

    async function register() {
        let call = await fetch("/register", {
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
    <div class="m-auto p-4">
        <div class="flex justify-between">
            <p class="font-extrabold text-left text-3xl">Register</p>
            <a href="#/" class="ease-out duration-200 hover:px-6 px-4 h-min py-px rounded-lg bg-neutral-800 text-xs font-black my-auto">BACK</a>
        </div>
        <form
            method="post"
            class="grid grid-cols-1 mt-2"
            on:submit|preventDefault={register}
        >
        <Response status={response.status} message={response.message} />
            <input
                type="text"
                placeholder="Name"
                class="w-80 bg-neutral-800 outline-none text-sm px-2 py-px rounded-lg"
                bind:value={form.name}
                required
            />
            <input
                type="email"
                placeholder="Email address"
                class="w-80 bg-neutral-800 outline-none text-sm px-2 py-px rounded-lg mt-1"
                bind:value={form.email}
                required
            />
            <input
                type="password"
                placeholder="Password"
                class="w-80 bg-neutral-800 outline-none text-sm px-2 py-px rounded-lg mt-1"
                bind:value={form.password}
                required
            />
            <input
                type="text"
                placeholder="Invitation code"
                class="w-80 bg-neutral-800 outline-none text-sm px-2 py-px rounded-lg mt-1"
                bind:value={form.invite}
                required
            />
            <button type="submit" class="mt-4 px-4 py-px font-bold rounded-lg bg-cyan-500 shadow-lg shadow-cyan-500/60">
                Register
            </button>
        </form>
    </div>
</div>
