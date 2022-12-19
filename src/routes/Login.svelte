<script>
    import { blur } from "svelte/transition";
</script>

<div class="flex h-screen">
    <div class="m-auto p-4">
        <img
            src="/logo.gif"
            class="drop-shadow-md w-48 mx-auto"
            alt="logo"
            in:blur
        />
        <form method="post" class="grid grid-cols-1 space-y-1">
            <input
                placeholder="Name"
                class="text-white w-80 bg-transparent border border-cyan-400 outline-none text-sm px-2 py-1"
            />
            <input
                placeholder="Password"
                class="text-white w-80 bg-transparent border border-cyan-400 outline-none text-sm px-2 py-1"
            />
            <button
                class="text-white w-80 bg-cyan-400 outline-none text-sm px-2 font-bold py-1"
                >Log in</button
            >
        </form>
    </div>
</div>
