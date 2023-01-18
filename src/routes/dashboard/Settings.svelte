<script>
// @ts-nocheck

    import Card from "../../components/Card.svelte";
    import Response from "../../components/Response.svelte";
    import { loggedIn } from "../../stores";
	import Slider from '@bulatdashiev/svelte-slider';
    import { onMount } from "svelte";
    import { toast } from "@zerodevx/svelte-toast";
    import { error, success } from "../../components/toaster/Themes";

    let customPath
    let quantity =  [1,5]
    let isLoggedIn = false
    loggedIn.subscribe((v) => {
        console.log(v)
        isLoggedIn = v
        if (!v) {
            location.href = "/"
        }
    })

    let form = {}
    let response = {}

    let domains = {selected: undefined, domains: [
        {domain: "1", wildcard: false}
    ]}

        onMount(async()=>{
         await fetch("https://api.floppa.host/preferences/get/domains", {
            credentials: "include"
            }).then((res)=>{res.json().then((data)=> {
            domains.domains = data.domains
        })})
        })


    let paths = {
        selected: undefined,
        pages: [
            "Random",
            "Emojis",
            "AmongUs",
            "AmongUs + Emojis",
            "Custom"
        ]
    }

    const updatePath = async () => {
        let pathMode = ""
        switch (paths.selected) {
           
            case "Emojis":
            pathMode = "emoji"
                break;
            case "AmongUs":
            pathMode = "amongus"
                break;
            case "AmongUs + Emojis":
            pathMode = "amongus_emoji"
                break;
            case "Custom":
            pathMode = "custom"
                break;
            default:
                pathMode = "random"

        }
        await fetch("https://api.floppa.host/preferences/change/path", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                mode: pathMode,
                path: customPath,
                amount: quantity[0]
            })
        }).then((res)=>{
            res.json().then((data)=>{
                if (res.status !== 200) {
                    toast.push(data.message, error)
                } else {
                    toast.push(data.message, success)
                }
            })
        })
    }

   
    async function changeEmbed() {
        await fetch("https://api.floppa.host/preferences/change/embed", {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(form),
        }).then((res)=>{
            res.json().then((data)=>{
                if (res.status !== 200) {
                    toast.push(data.message, error)
                } else {
                    toast.push(data.message, success)
                }
            })
        })

    }

const changeDomain = async () => {
    await fetch("https://api.floppa.host/preferences/change/domain", {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            domain: domains.selected
        })
    }).then((res)=>{
            res.json().then((data)=>{
                if (res.status !== 200) {
                    toast.push(data.message, error)
                } else {
                    toast.push(data.message, success)
                }
            })
        })
}
</script>

<div class="flex h-screen">
    {#if isLoggedIn}
    <div class="m-auto">
        <div class="grid grid-cols-2 gap-4">
            <Card title="Change embed">
                <form method="post"
                class="grid grid-cols-1 mt-2"
                on:submit|preventDefault={changeEmbed}>
                    <Response status={response.status} message={response.message} />
                        <input
                            type="text"
                            placeholder="Embed author"
                            class="w-80 bg-neutral-800 outline-none text-sm px-2 py-px rounded-lg mt-1"
                            bind:value={form.author}
                            required
                        />
                        
                        <input
                            type="text"
                            placeholder="Embed title"
                            class="w-80 bg-neutral-800 outline-none text-sm px-2 py-px rounded-lg mt-1"
                            bind:value={form.title}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Embed description"
                            class="w-80 bg-neutral-800 outline-none text-sm px-2 py-px rounded-lg mt-1"
                            bind:value={form.description}
                            required
                        />
                        <div class="flex w-80 bg-neutral-800 text-sm px-2 py-px rounded-lg mt-1 my-auto">
                            <input
                                type="color"
                                class="h-4 w-4 my-auto"
                                bind:value={form.color}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Embed color (use hex)"
                                class="outline-none bg-transparent ml-2"
                                bind:value={form.color}
                                required
                            />
                        </div>
                        <button type="submit" class="mt-4 px-4 py-px font-bold rounded-lg bg-cyan-500 shadow-lg shadow-cyan-500/60">
                            Change embed settings
                        </button>
                </form>
            </Card>
            <Card title="Change path" additional="h-min">
                <select bind:value={paths.selected} class="mt-2 bg-neutral-800 text-sm border border-neutral-700 px-2 w-full">
                    {#each paths.pages as page}
                        <option value={page}>
                            {page}
                        </option>
                    {/each}
                </select>
                {#if paths.selected === "AmongUs" || paths.selected === "AmongUs + Emojis" || paths.selected === "Emojis"}
                <span>Quantity: {quantity[0]}</span>
                <Slider bind:value={quantity} step={1} min={1} max={5}/>
                {/if}

                {#if paths.selected === "Custom"}
                <div>
                    <input class="w-80 bg-neutral-800 outline-none text-sm px-2 py-px rounded-lg mt-1" type="text" bind:value={customPath} placeholder="Custom path"/>
                </div>
                {/if}
                <button on:click={updatePath} type="submit" class="w-full mt-4 px-4 py-px font-bold rounded-lg bg-cyan-500 shadow-lg shadow-cyan-500/60">
                    Save new path
                </button>
            </Card>
            <Card title="Change domain" additional="h-min">
                <select bind:value={domains.selected} class="mt-2 bg-neutral-800 text-sm border border-neutral-700 px-2 w-full">
                    {#each domains.domains as domain}
                        <option value={domain["domain"]}>
                            {domain["domain"]}
                        </option>
                    {/each}
                </select>
                <button on:click={changeDomain} class="w-full mt-4 px-4 py-px font-bold rounded-lg bg-cyan-500 shadow-lg shadow-cyan-500/60">
                    Change the domain
                </button>
            </Card>
        </div>
    </div>
    {/if}
</div>
