<script>
    import { PlusIcon, AlertCircleIcon, CheckIcon } from "svelte-feather-icons";
    import { blur } from "svelte/transition";

    let form = {};
    let response = {};

    async function register() {
        let call = await fetch("/register", {
            method: "post",
            body: JSON.stringify(form),
        });

        response = {
            status: call.status,
        };
    }
</script>

<div class="flex h-screen">
    <div class="m-auto p-4">
        <img
            src="/logo.gif"
            class="drop-shadow-md w-48 mx-auto"
            alt="logo"
            in:blur
        />
        {#if response.status == 200}
            <div class="flex w-80 bg-lime-500 text-sm px-2 py-1 my-auto">
                <div class="flex mx-auto">
                    <CheckIcon size="18" /><span class="pl-2"
                        >Successfully created an account!</span
                    >
                </div>
            </div>
        {:else if response.status != null}
            <div class="flex w-80 bg-red-500 text-sm px-2 py-1 my-auto">
                <div class="flex mx-auto">
                    <AlertCircleIcon size="18" /><span class="pl-2"
                        >Invalid data</span
                    >
                </div>
            </div>
        {/if}
        <form
            method="post"
            class="grid grid-cols-1 space-y-1 mt-2"
            on:submit|preventDefault={register}
        >
            <input
                placeholder="Name"
                class="text-white w-80 bg-transparent border border-cyan-400 outline-none text-sm px-2 py-1"
                bind:value={form.name}
            />
            <input
                placeholder="Email"
                class="text-white w-80 bg-transparent border border-cyan-400 outline-none text-sm px-2 py-1"
                bind:value={form.email}
            />
            <input
                placeholder="Password"
                class="text-white w-80 bg-transparent border border-cyan-400 outline-none text-sm px-2 py-1"
                bind:value={form.password}
            />
            <input
                placeholder="Invitation code"
                class="text-white w-80 bg-transparent border border-cyan-400 outline-none text-sm px-2 py-1"
                bind:value={form.invite}
            />
            <button
                class="flex text-white w-80 bg-cyan-400 outline-none text-sm px-2 font-semibold py-1 my-auto"
                type="submit"
            >
                <div class="flex mx-auto">
                    <PlusIcon size="18" /><span class="pl-2">Register</span>
                </div>
            </button>
        </form>
    </div>
</div>
