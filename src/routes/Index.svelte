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
        <div class="font-mono text-left w-1/2 mx-auto">
            <p class="flex text-2xl font-bold">
                <HelpCircleIcon class="my-auto mr-2" />
                what color is your bugatti
            </p>
            <p>
                Floppa.host is an image host made to be really fast and
                reliable. There's been a lot of people behind this project,
                meaning there is a lot of support given to our project.
            </p>
            <div class="grid grid-cols-2 w-max mx-auto text-center">
                <a
                    href="#/login"
                    class="rounded-full border border-orange-600 h-8 px-4 m-2"
                    >Login</a
                >
                <a
                    href="#/register"
                    class="rounded-full border border-orange-600 h-8 px-4 m-2"
                    >Register</a
                >
            </div>
        </div>
    </div>
</div>
