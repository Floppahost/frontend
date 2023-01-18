<script>
    import { toast } from '@zerodevx/svelte-toast'
    import Card from "../../components/Card.svelte";
    import Response from "../../components/Response.svelte";
    import { error, success } from '../../components/toaster/Themes';
    import { loggedIn, uid, username } from "../../stores.js"
    let form = {};
    let response = {};

    let isLoggedIn = false
    let usernameValue
    let uidValue

    const updatePassword = async () => {
        await fetch("https://api.floppa.host/preferences/change/password", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(form)
        }).then((res)=>{
            res.json().then((data)=>{
                if (res.status != 200) {
                toast.push(data.message, error)
                } else {
                toast.push(data.message, success)
                }
            })
        })
    }

    const downloadConfig = async () => {
        await fetch("https://api.floppa.host/preferences/get/config", {
            credentials: "include"
        }).then((res)=>res.json().then((data)=>{
            const blob = new Blob([data.config], { type: "text/plain" });
            const el = document.createElement('a');
            el.download = "floppa-config.sxcu"
            el.href = URL.createObjectURL(blob);
            el.dataset.downloadurl = ["text/plain", el.download, el.href].join(':');
            el.style.display = "none";
            document.body.appendChild(el);
            el.click();
            document.body.removeChild(el);
            toast.push("Config downloaded", success)
        }))
    }
    loggedIn.subscribe((v) => {
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
    {#if isLoggedIn}
    <div class="m-auto">
        <div class="grid grid-cols-2 gap-4">
            <Card title="Dashboard" additional="col-span-2">
                Welcome back, {usernameValue}
            </Card>
            <Card title="Change password">
                <form method="post"
                class="grid grid-cols-1 mt-2"
                on:submit|preventDefault={updatePassword} >
                    <Response status={response.status} message={response.message} />
                        <input
                            type="password"
                            placeholder="Old password"
                            class="w-80 bg-neutral-800 outline-none text-sm px-2 py-px rounded-lg"
                            bind:value={form.old_password}
                            required
                        />
                        <input
                            type="password"
                            placeholder="New password"
                            class="w-80 bg-neutral-800 outline-none text-sm px-2 py-px rounded-lg mt-1"
                            bind:value={form.new_password}
                            required
                        />
                        <button type="submit" class="mt-4 px-4 py-px font-bold rounded-lg bg-cyan-500 shadow-lg shadow-cyan-500/60">
                            Change password
                        </button>
                </form>
            </Card>
            <Card title="Download config" additional="h-min">
                <button on:click={downloadConfig} type="submit" class="w-full mt-4 px-4 py-px font-bold rounded-lg bg-cyan-500 shadow-lg shadow-cyan-500/60">
                    Download config
                </button>
            </Card>
        </div>
    </div>
    {/if}
</div>
