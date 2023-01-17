<script>
        import { loggedIn, uid, username } from "../stores.js"
    async function invitewave() {
        
    }

    const doAddDomain = async () => {

    }

    const doRemoveDomain = async () => {

    }

    const doBlacklistUser = async () => {

    }

    const doUnblacklistUser = async () => {

    }

    const wipeInvites = async () => {

    }

    let usernameValue
    let uidValue
    let isLoggedIn
    let addDomain
    let removeDomain
    let unblacklistUser
    let blacklistUser
    loggedIn.subscribe((v) => {
        console.log(v)
        isLoggedIn = v
        if (!v) {
            location.href = "/"
        }
    })
    
    username.subscribe((v)=>{
        usernameValue = v
    })

    uid.subscribe((v)=>{
        uidValue = v
    })
</script>

<div class="flex h-screen">
    <div class="m-auto sm:w-[75%] w-full">
        <div class="grid sm:grid-cols-3 grid-cols-1 gap-4 w-full mx-auto">
            <div class="backdrop-blur-lg bg-neutral-800/75 p-4 rounded-3xl">
                <div class="flex">
                    <p class="text-3xl font-bold">Admin Dashboard</p>
                </div>
                <div class="flex">
                    <div class="h-auto">
                        <p>Admin ID: <strong>{uidValue}</strong></p>
                    </div>
                </div>
                <p>Logged in as <strong>{usernameValue}</strong></p>
            </div>
                <div class="backdrop-blur-lg bg-neutral-800/75 p-4 rounded-3xl space-y-4">
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
                <div class="backdrop-blur-lg bg-neutral-800/75 p-4 rounded-3xl space-y-4">
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
            <div class="backdrop-blur-lg bg-neutral-800/75 p-4 rounded-3xl">
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
            <div class="backdrop-blur-lg bg-neutral-800/75 p-4 rounded-3xl space-y-4">
                <b class="text-3xl">Add a domain</b>
                <form method="post" class="grid grid-cols-1 space-y-1">
                    <input
                        placeholder="Domain"
                        bind:value={addDomain}
                        class="text-white w-70 rounded-lg bg-transparent border border-cyan-400 outline-none text-sm px-2 py-1"
                    />
                    <button
                        class="text-white w-70 rounded-lg bg-cyan-400 outline-none text-sm px-2 font-bold py-1"
                        >Add the domain</button
                    >
                </form>
            </div>
            
            <div class="backdrop-blur-lg bg-neutral-800/75 p-4 rounded-3xl space-y-4">
                <b class="text-3xl">Remove a domain</b>
                <form method="post" class="grid grid-cols-1 space-y-1">
                    <input
                        placeholder="Domain"
                        bind:value={removeDomain}
                        class="text-white w-70 rounded-lg bg-transparent border border-cyan-400 outline-none text-sm px-2 py-1"
                    />
                    <button
                        class="text-white w-70 rounded-lg bg-cyan-400 outline-none text-sm px-2 font-bold py-1"
                        >Remove the domain</button
                    >
                </form>
            </div>
            <div class="backdrop-blur-lg bg-neutral-800/75 p-4 rounded-3xl space-y-4">
                <b class="text-3xl">Add a domain</b>
                <form method="post" class="grid grid-cols-1 space-y-1">
                  <div class="flex gap-2">
                    <input
                    placeholder="Domain"
                    class="text-white w-full rounded-lg bg-transparent border border-cyan-400 outline-none text-sm px-2 py-1"
                     />
                    <select
                    placeholder="Wildcard"
                    class="text-white w-full rounded-lg bg-transparent border border-cyan-400 outline-none text-sm px-2 py-1"
                     >
                    
                    </select>
                  </div>
                    <button
                        class="text-white w-70 rounded-lg bg-cyan-400 outline-none text-sm px-2 font-bold py-1"
                        >Add the domain</button
                    >
            </form>
        </div>
        </div>
    </div>
</div>           

