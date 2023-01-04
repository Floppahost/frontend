<script>
    import { blur } from "svelte/transition";
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
                    Established in 2022, image hosting service that is reliable,
                    fast and trustworthy. Made by a few young coders who spent
                    their free time to code this service. <b
                        >Registration requires an invitation code.</b
                    >
                </p>
            </div>
        </div>
    </div>
</div>
