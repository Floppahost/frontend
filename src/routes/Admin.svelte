<script>
// @ts-nocheck

    import { toast } from "@zerodevx/svelte-toast";
    import { error, success } from "../components/toaster/Themes.js";
    import { loggedIn, uid, username } from "../stores.js"

    
    let unblacklistUsername = ""
    let domain = {}
    let invite = {}
    let blacklist = {}
    let isLoggedIn = false
    let uidValue = 0
    let usernameValue = ""
     const invitewave = async () => {
        await fetch("https://api.floppa.host/admin/wave", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            credentials: "include"
        }).then((res)=>{res.json().then((data)=> {
            if (res.status != 200) {
                toast.push(data.message, error)
            } else {
                toast.push(data.message, success)
            }
        })})
    }

    const addDomain = async () => {
        await fetch("https://api.floppa.host/admin/domains/add", {
            method: "POST",
            body: JSON.stringify(domain),
            headers: {
                "Content-type": "application/json"
            },
            credentials: "include"
        }).then((res)=>{res.json().then((data)=> {
            if (res.status != 200) {
                toast.push(data.message, error)
            } else {
                toast.push(data.message, success)
            }
        })})

    }

    const doRemoveDomain = async () => {

    }

    const doBlacklistUser = async () => {

    }

    const doUnblacklistUser = async () => {
        await fetch("https://api.floppa.host/admin/invites/purge", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({
                username: unblacklistUsername
            })
        })
    }

    const wipeInvites = async () => {
        await fetch("https://api.floppa.host/admin/invites/purge", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            credentials: "include"
        }).then((res)=>{res.json().then((data)=> {
            if (res.status != 200) {
                toast.push(data.message, error)
            } else {
                toast.push(data.message, success)
            }
        })})
    }

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
                        bind:value={blacklist.username}
                            placeholder="Username"
                            class="text-white w-70 rounded-lg bg-transparent border border-cyan-400 outline-none text-sm px-2 py-1"
                        />
                        <input
                        bind:value={blacklist.reason}
                            placeholder="Reason"
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
                    <form method="post" on:submit|preventDefault={doUnblacklist} class="grid grid-cols-1 space-y-1">
                        <input
                        bind:value={unblacklistUsername}
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
                on:click={invitewave}
                    class="text-white w-70 rounded-lg bg-cyan-400 outline-none text-sm px-2 font-bold py-1"
                    >Invite Wave</button
                >
                <button
                    on:click={wipeInvites}
                    class="text-white w-70 rounded-lg bg-cyan-400 outline-none text-sm px-2 font-bold py-1"
                    >Wipe Invites</button
                >
            </div>
            <div class="backdrop-blur-lg bg-neutral-800/75 p-4 rounded-3xl space-y-4">
                <b class="text-3xl">Add a domain</b>
                <form on:submit|preventDefault={addDomain} method="post" class="grid grid-cols-1 space-y-1">
                  <div class="flex gap-2">
                    <input
                    bind:value={domain.domain}
                    placeholder="Domain"
                    class="text-white w-full rounded-lg bg-transparent border border-cyan-400 outline-none text-sm px-2 py-1"
                     />
                     <span>Wildcard</span>
                     <input on:change={(el)=>domain.wildcard = el.target.checked} type="checkbox" class="w-full h-5 bg-red-500" />                  
                    </div>
                    <input
                    bind:value={domain.username}
                    placeholder="Username"
                    class="text-white w-full rounded-lg bg-transparent border border-cyan-400 outline-none text-sm px-2 py-1"
                     />
                    <button
                        class="text-white w-70 rounded-lg bg-cyan-400 outline-none text-sm px-2 font-bold py-1"
                        >Add the domain</button
                    >
            </form>
        </div>
      
        <div class="backdrop-blur-lg bg-neutral-800/75 p-4 rounded-3xl space-y-4">
            <b class="text-3xl">Give an invite</b>
            <form method="post" class="grid grid-cols-1 space-y-1">
                <input
                    placeholder="Username"
                    bind:value={invite.username}
                    class="text-white w-70 rounded-lg bg-transparent border border-cyan-400 outline-none text-sm px-2 py-1"
                />
                <button
                    class="text-white w-70 rounded-lg bg-cyan-400 outline-none text-sm px-2 font-bold py-1"
                    >Give an invite</button
                >
            </form>
        </div>
        </div>
    </div>
</div>           

