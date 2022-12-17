<script>
    import { HelpCircleIcon } from "svelte-feather-icons";
    import { blur } from "svelte/transition";
</script>

<div class="flex h-screen main bg-center bg-no-repeat bg-contain">
    <div class="m-auto">
        <img
            src="/logo.gif"
            class="drop-shadow-md mx-auto my-auto w-96"
            alt="logo"
            in:blur
        />
        <div class="text-left w-1/2 mx-auto">
            <div class="flex">
                <p class="text-3xl font-bold">Log in</p>
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
            <div class="grid grid-cols-2 w-max mx-auto text-center text-bold">
                <a
                    href="#/login"
                    class="text-sm rounded-full border border-cyan-400 py-px px-4 m-2"
                    >Login</a
                >
                <a
                    href="#/register"
                    class="text-sm rounded-full border border-cyan-400 py-px px-4 m-2"
                    >Register</a
                >
            </div>
        </div>
    </div>
</div>
