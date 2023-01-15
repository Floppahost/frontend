<script>
    import { onMount } from "svelte";

    onMount(async ()=>{
        await fetch("https://api.floppa.host/auth/status", {
            credentials: "include"
        })
    })
</script>

<div class="flex h-screen">
    <div class="m-auto">
        <img src="/logo-faded.png" alt="logo" class="w-56 mx-auto mb-12">
        <div class="text-center -mt-24">
            <p class="font-bold text-4xl">get good get flop!!</p>
            <p>Fast, reliable and privacy oritented image hosting service.</p>
        </div>
        <div class="flex justify-center mx-auto mt-4 space-x-2 font-bold">
            <a href="#/login" class="ease-out duration-200 hover:px-6 px-4 py-1 rounded-lg bg-cyan-500 shadow-lg shadow-cyan-500/60">Login</a>
            <a href="#/register" class="ease-out duration-200 hover:px-6 px-4 py-1 rounded-lg bg-cyan-500 shadow-lg shadow-cyan-500/60">Register</a>
        </div>
    </div>
</div>
