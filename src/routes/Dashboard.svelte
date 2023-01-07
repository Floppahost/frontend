<script>
    import { UserIcon } from "svelte-feather-icons";
</script>

<div class="flex h-screen">
    <div class="m-auto sm:w-1/3 w-full">
        <div class="grid sm:grid-cols-2 grid-cols-1 gap-4 w-full mx-auto">
            <div class="backdrop-blur-lg bg-cyan-400/10 p-4 rounded-3xl">
                <div class="flex">
                    <UserIcon size="24" class="my-auto" />
                    <p class="pl-2 text-3xl font-bold">Account</p>
                    <button
                        class="text-sm rounded-full bg-[#191621] py-px px-4 ml-2 my-auto"
                        >Reset password
                    </button>
                </div>
                <div class="flex">
                    <div class="h-auto">
                        <div class="ml-2 w-px h-full bg-white" />
                    </div>
                    <div class="flex">
                        <div class="w-4 h-px bg-white my-auto mr-2" />
                        <p>uid: <b>1</b>, registered <b>a moment ago</b></p>
                    </div>
                </div>
                <div class="space-x-2">
                    <button
                        class="text-sm rounded-full bg-[#191621] py-px px-4 ml-2"
                        >Download config
                    </button>
                    <button class="text-sm rounded-full bg-[#191621] py-px px-4"
                        >Reset password
                    </button>
                </div>
            </div>
            <div
                class="backdrop-blur-lg bg-cyan-400/10 p-4 rounded-3xl space-y-4"
            >
                <b class="text-3xl">Settings</b>
                <button class="text-sm rounded-full bg-[#191621] py-px px-4"
                    >Invites
                </button>
                <a
                    class="text-sm rounded-full bg-[#191621] py-px px-4"
                    href="#/gallery"
                    >Gallery
                </a>
            </div>
        </div>
    </div>
</div>
