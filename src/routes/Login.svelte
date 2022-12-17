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
        <div class="text-left sm:w-1/2 w-80 mx-auto">
            <div class="flex">
                <p class="text-3xl font-bold mx-auto">Log in</p>
            </div>
            <div class="flex">
                <div class="w-12 h-auto mx-auto">
                    <div class="w-px h-full bg-white mx-auto" />
                </div>
                <form method="post" class="space-y-2 my-2">
                    <input
                        class="w-auto outline-none border border-white bg-transparent px-2 py-px text-sm"
                        placeholder="Name"
                    />
                    <input
                        class="w-full outline-none border border-white bg-transparent px-2 py-px text-sm"
                        placeholder="Password"
                    />
                </form>
            </div>
            <a
                href="#/login"
                class="w-max text-sm rounded-full border border-cyan-400 py-px px-4 m-2"
                >Login</a
            >
        </div>
    </div>
</div>
