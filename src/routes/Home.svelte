<script>
    import { loggedIn } from "../stores";
    import { LockIcon, SmileIcon, HexagonIcon } from 'svelte-feather-icons'

    loggedIn.subscribe((v) => {
        if (v) {
            location.href = "/#/dashboard"
        }
    })
</script>

<svelte:head>
  <meta property="og:title" content="floppa.host">
  <meta property="og:url" content="https://floppa.host">
  <meta property="og:image" content="https://floppa.host/floppa.jpg">
  <meta property="og:description" content="A file hosting service for all caracals!">
</svelte:head>

<div class="flex h-screen">
    <div class="m-auto">
        <img src="/floppa.jpg" alt="logo" class="w-32 mx-auto mb-4 rounded-2xl">
        <div class="text-center">
            <p class="font-bold text-4xl">floppa.host</p>
            <p>A file hosting service for all caracals!</p>
        </div>

        <div class="grid mt-16 grid-cols-1 sm:grid-cols-3 gap-4 opacity-80 font-mono">
            <div class="mx-auto">
                <LockIcon class="mx-auto text-cyan-500" />
                <p class="font-semibold text-3xl">Private</p>
            </div>
            <div class="mx-auto">
                <HexagonIcon class="mx-auto text-cyan-500" />
                <p class="font-semibold text-3xl">Transparent</p>
            </div>
            <div class="mx-auto">
                <SmileIcon class="mx-auto text-cyan-500" />
                <p class="font-semibold text-3xl">Friendly</p>
            </div>
        </div>
    </div>
</div>
