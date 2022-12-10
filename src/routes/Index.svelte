<script>
    import { ZapIcon } from "svelte-feather-icons";
</script>

<div class="flex h-screen main bg-center bg-no-repeat bg-contain">
    <div class="m-auto">
        <img
            src="/logo.gif"
            class="drop-shadow-md mx-auto my-auto w-96"
            alt="logo"
        />
        <div class="grid grid-cols-3 gap-2 justify-items-center">
            <div class="p-3 flex">
                <ZapIcon class="my-auto" />
                <p class="pl-2 font-bold my-auto text-2xl">Fast</p>
            </div>
            <div class="p-3 flex">
                <ZapIcon class="my-auto" />
                <p class="pl-2 font-bold my-auto text-2xl">Fast</p>
            </div>
            <div class="p-3 flex">
                <ZapIcon class="my-auto" />
                <p class="pl-2 font-bold my-auto text-2xl">Fast</p>
            </div>
        </div>
    </div>
</div>
