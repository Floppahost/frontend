<script>
    import { onMount } from "svelte";
    import {
        UnlockIcon,
        AlertCircleIcon,
        CheckIcon,
    } from "svelte-feather-icons";
    import { blur } from "svelte/transition";

    let form = {};
    let response = {};

    async function login() {
       // @ts-ignore
       const domain = import.meta.env.VITE_BACKEND_DOMAIN
        const request = await fetch(`${domain}/auth/login`, {
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(form)
        })

        response = {
            status: request.status,
        };

        console.log(response, request)
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
                        >Successfully logged in!</span
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
            on:submit|preventDefault={login}
        >
            <input
                type="text"
                placeholder="Username or email"
                class="text-white w-80 bg-transparent border border-cyan-400 outline-none text-sm px-2 py-1"
                bind:value={form.username}
                required
            />
            <input
                type="password"
                placeholder="Password"
                class="text-white w-80 bg-transparent border border-cyan-400 outline-none text-sm px-2 py-1"
                bind:value={form.password}
                required
            />
            <button
                class="flex text-white w-80 bg-cyan-400 text-sm px-2 font-semibold py-1 my-auto"
                type="submit"
            >
                <div class="flex mx-auto">
                    <UnlockIcon size="18" /><span class="pl-2">Log in</span>
                </div>
            </button>
        </form>
    </div>
</div>
