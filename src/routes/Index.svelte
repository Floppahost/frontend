<script>
    import { onMount } from "svelte";
    import { blur } from "svelte/transition";

    let inviteOnly = true
    onMount(async()=>{
        // @ts-ignore
        const domain = import.meta.env.VITE_BACKEND_DOMAIN
        const request = await fetch(`${domain}/status/invite`)
        request.json().then((data)=> {
            inviteOnly = data.inviteOnly
        })
    })
</script>

<div class="flex h-screen">
    <div class="m-auto">
        <img
            src="/logo.gif"
            class="drop-shadow-md mx-auto my-auto w-96"
            alt="logo"
            in:blur
        />
        <div class="text-left sm:w-1/2 w-80 mx-auto">
            <div class="flex">
                <p class="text-3xl font-bold">About us</p>
            </div>
            <div class="flex">
                <div class="w-12 h-auto mx-auto">
                    <div class="w-px h-full bg-white mx-auto" />
                </div>
                <p class="font-normal text-sm">
                    A file hosting service that is reliable,
                    fast, trustworthy — running since 2023. Made by a few young coders who spent
                    their free time to code this service. 
                    {#if inviteOnly}
                    <strong
                        >Registration requires an invitation code.</strong
                    >
                    {/if}
                </p>
            </div>
        </div>
    </div>
</div>
