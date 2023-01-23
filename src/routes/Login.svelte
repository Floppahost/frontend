<script>
    import { loggedIn } from "../stores";
    import { ArrowLeftIcon } from 'svelte-feather-icons'

    let form = {};
    let response = {};

    loggedIn.subscribe((v) => {
        if (v) {
            location.href = "/#/dashboard"
        }
    })

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
            <p class="font-bold text-left text-3xl">Log in</p>
            <a href="#/" class="p-1 rounded-full bg-neutral-800 text-xs font-bold my-auto text-neutral-400">
                <ArrowLeftIcon size="20"/>
            </a>
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
