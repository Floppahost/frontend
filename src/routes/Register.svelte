<script>
    import Response from "../components/Response.svelte";
    import axios from "axios"
    import {onMount} from "svelte"
    let form = {};
    let response = {};

    onMount(async () => {
        await axios.get(`https://api.floppa.host/status/invite`).then((res)=>response = {
            status: res.status,
            inviteOnly: res.data.inviteOnly
        })
        console.log(response)
    })
    async function register() {

        await axios({
            withCredentials: true,
            method: "post",
            url: "https://api.floppa.host/auth/register",
            data: form
        }).then((res)=>{
            response.status = res.status
            response.message = res.data.message
        });

        if (response.status === 200) {
            location.href = "#/dashboard"
        }


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
        {#if response.message != undefined}
        <Response status={response.status} message={response.message} />
        {/if}
            <input
                type="text"
                placeholder="Username"
                class="w-80 bg-neutral-800 outline-none text-sm px-2 py-px rounded-lg"
                bind:value={form.username}
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
            {#if response.inviteOnly}
            <input
            type="text"
            placeholder="Invitation code"
            class="w-80 bg-neutral-800 outline-none text-sm px-2 py-px rounded-lg mt-1"
            bind:value={form.invite}
            required
        />
            {/if}
            <button type="submit" class="mt-4 px-4 py-px font-bold rounded-lg bg-cyan-500 shadow-lg shadow-cyan-500/60">
                Register
            </button>
        </form>
    </div>
</div>
