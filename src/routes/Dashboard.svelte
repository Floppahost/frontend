<script>
    import { UserIcon } from "svelte-feather-icons";
</script>

<div class="flex min-h-screen main bg-center bg-no-repeat bg-contain">
    <div class="m-auto">
        <div class="bg-cyan-400 rounded-lg">
        <div class="font-mono px-8 w-max mx-auto">
                <UserIcon class="w-max mx-auto" size="65" />
                <p class="font-bold">
                Welcome, $username
                </p>
                <p class="w-max mx-auto">
                UID: $uid
                </p>
            </div>
        </div>
            <div class="flex screen h-32 main">
            <div class="m-auto bg-cyan-400 rounded-lg">
                <div class="font-mono w-max mx-auto">
                <a
                    href="#/getconfig"
                    class="text-sm rounded-full border border-cyan-400 py-px px-4 m-2 font-bold"
                    >Download Config</a
                >
                <a
                href="#/embed"
                class="text-sm rounded-full border border-cyan-400 py-px px-4 m-2 font-bold"
                >Embed Settings</a
            >
            </div>
        </div>
            </div>
        </div>
    </div>
