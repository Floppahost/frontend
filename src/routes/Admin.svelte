<div class="flex h-screen">
    <div class="m-auto sm:w-1/3 w-full">
        <div class="grid sm:grid-cols-2 grid-cols-1 gap-4 w-full mx-auto">
            <div class="backdrop-blur-lg bg-cyan-400/10 p-4 rounded-3xl">
                <div class="flex">
                    <p class="text-3xl font-bold">Admin Dashboard</p>
                </div>
                <div class="flex">
                    <div class="h-auto">
                        <p>Admin ID: <b>1</b></p>
                    </div>
                </div>
                <p>Logged in as <b>barius</b></p>
            </div>
                <div class="backdrop-blur-lg bg-cyan-400/10 p-4 rounded-3xl space-y-4">
                    <b class="text-3xl">Blacklist A User</b>
                    <form method="post" class="grid grid-cols-1 space-y-1">
                        <input
                            placeholder="Username"
                            class="text-white w-70 rounded-lg bg-transparent border border-cyan-400 outline-none text-sm px-2 py-1"
                        />
                        <button
                            class="text-white w-70 rounded-lg bg-cyan-400 outline-none text-sm px-2 font-bold py-1"
                            >Blacklist</button
                        >
                    </form>
                </div>
                <div class="backdrop-blur-lg bg-cyan-400/10 p-4 rounded-3xl space-y-4">
                    <b class="text-3xl">Unblacklist A User</b>
                    <form method="post" class="grid grid-cols-1 space-y-1">
                        <input
                            placeholder="Username"
                            class="text-white w-70 rounded-lg bg-transparent border border-cyan-400 outline-none text-sm px-2 py-1"
                        />
                        <button
                            class="text-white w-70 rounded-lg bg-cyan-400 outline-none text-sm px-2 font-bold py-1"
                            >Unblacklist</button
                        >
                </form>
            </div>
            <div class="backdrop-blur-lg bg-cyan-400/10 p-4 rounded-3xl">
                <div class="flex">
                    <p class="text-3xl font-bold">Tools</p>
                </div>
                <div class="flex">
                    <div class="h-auto pb-8">
                        <p>Press the button to initiate an action</p>
                    </div>
                </div>
                <button
                    class="text-white w-70 rounded-lg bg-cyan-400 outline-none text-sm px-2 font-bold py-1"
                    >Invite Wave</button
                >
                <button
                    class="text-white w-70 rounded-lg bg-cyan-400 outline-none text-sm px-2 font-bold py-1"
                    >Wipe Invites</button
                >
            </div>
        </div>
    </div>
</div>           

