<script>
    import { UserIcon, KeyIcon } from "svelte-feather-icons";

    let form = {};
</script>

<div class="flex h-screen">
    <div class="m-auto 2xl:w-1/3 w-full">
        <div class="grid sm:grid-cols-2 grid-cols-1 gap-4 w-full mx-auto">
            <div class="backdrop-blur-lg bg-black/25 p-4 rounded-3xl">
                <div class="flex">
                    <UserIcon size="24" class="my-auto" />
                    <h1 class="pl-2 text-3xl font-bold">Account</h1>
                    <div class="my-auto">
                        <a
                            href="#/change-password"
                            class="text-sm rounded-full bg-[#191621] px-4 ml-2 my-auto"
                            data-bs-toggle="modal"
                            data-bs-target="#resetpassword"
                        >
                            Reset password
                        </a>
                    </div>
                </div>
            </div>
            <div class="backdrop-blur-lg bg-black/25 p-4 rounded-3xl">
                <div class="flex">
                    <UserIcon size="24" class="my-auto" />
                    <h1 class="pl-2 text-3xl font-bold">Account</h1>
                    <div class="my-auto">
                        <a
                            href="#/change-password"
                            class="text-sm rounded-full bg-[#191621] px-4 ml-2 my-auto"
                            >Reset password
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div
    class="modal backdrop-blur fixed top-0 left-0 hidden w-full h-full"
    id="resetpassword"
    tabindex="-1"
    data-bs-backdrop="static"
    aria-hidden="true"
>
    <div
        class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none"
    >
        <div class="backdrop-blur-lg bg-black/25 p-4 rounded-3xl mx-auto">
            <div class="flex">
                <KeyIcon size="24" class="my-auto" />
                <h1 class="pl-2 text-3xl font-bold">Reset password</h1>
                <button
                    type="button"
                    class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                    data-bs-dismiss="modal">Close</button
                >
            </div>
            <form
                method="post"
                class="grid grid-cols-1 space-y-1 mt-2"
                on:submit|preventDefault
            >
                <input
                    type="password"
                    placeholder="Current password"
                    class="text-white w-80 bg-transparent border border-cyan-400 outline-none text-sm px-2 py-1"
                    bind:value={form.current}
                />
                <input
                    type="password"
                    placeholder="New password"
                    class="text-white w-80 bg-transparent border border-cyan-400 outline-none text-sm px-2 py-1"
                    bind:value={form.new}
                />
                <button
                    class="flex text-white w-80 bg-cyan-400 text-sm px-2 font-semibold py-1 my-auto"
                    type="submit"
                >
                    <div class="flex mx-auto">
                        <KeyIcon size="18" /><span class="pl-2"
                            >Reset password</span
                        >
                    </div>
                </button>
            </form>
        </div>
    </div>
</div>
