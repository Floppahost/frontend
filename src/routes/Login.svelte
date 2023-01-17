<script>
    import Response from "../components/Response.svelte";
    import axios from "axios"
    let form = {};
    let response = {};

    async function login() {
        // @ts-ignore
        await fetch("https://api.floppa.host/auth/login", {
            headers: {
                "Content-type": "application/json"
            },
            credentials: "include",
            method: "post",
            body: JSON.stringify(form)
        }).then((res)=>{
            response.status = res.status
            if (res.status === 200) {
                location.href = "/#/dashboard"
            }
            res.json().then((data)=> {
                response.message = data.message
            })
        });
    }
</script>

<div class="flex h-screen">
    <div class="m-auto p-4">
        <div class="flex justify-between">
            <p class="font-extrabold text-left text-3xl">Log in</p>
            <a href="#/" class="ease-out duration-200 hover:px-6 px-4 h-min py-px rounded-lg bg-neutral-800 text-xs font-black my-auto">BACK</a>
        </div>
        <form
            method="post"
            class="grid grid-cols-1 mt-2"
            on:submit|preventDefault={login}
        >
            <input
                type="text"
                placeholder="Name"
                class="w-80 bg-neutral-800 outline-none text-sm px-2 py-px rounded-lg"
                bind:value={form.username}
                required
            />
            <input
                type="password"
                placeholder="Password"
                class="w-80 bg-neutral-800 outline-none text-sm px-2 py-px rounded-lg mt-1"
                bind:value={form.password}
                required
            />
            <button type="submit" class="mt-4 px-4 py-px font-bold rounded-lg bg-cyan-500 shadow-lg shadow-cyan-500/60">
                Log in
            </button>
        </form>
    </div>
</div>
