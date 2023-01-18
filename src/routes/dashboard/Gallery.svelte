<script>
    import { onMount } from "svelte";
    import Card from "../../components/Card.svelte";
    import FaTrashAlt from 'svelte-icons/fa/FaTrashAlt.svelte'
    import { loggedIn } from "../../stores.js"
    import { toast } from "@zerodevx/svelte-toast";
    import { error, success } from "../../components/toaster/Themes";

    let isLoggedIn = false
    loggedIn.subscribe((v) => {
        isLoggedIn = v
        if (!v) {
            location.href = "/"
        }
    })
    
    let images = [
       
    ];

    let page = 0
    
    const getUploads = () => {
         fetch("https://api.floppa.host/preferences/get/uploads?page=1", {
        credentials: "include"
       }).then((res)=>res.json().then((data)=>{
        images = data.data
       }))
    }

    onMount(async () => {
      getUploads()
    })


    const deleteImage = async (uploadId) => {
        await fetch("https://api.floppa.host/files/" + uploadId, {
            method: "DELETE",
            credentials: "include"
        }).then((res)=>res.json().then((data)=>{
            if (res.status !== 200) {
                toast.push(data.message, error)
            } else {
                images = images.filter(e => e.upload_id !== uploadId)
                toast.push(data.message, success)
            }
        }))
    }
</script>

<div class="flex h-screen">
    {#if isLoggedIn}
    <div class="m-auto">
        {#if images.length <= 0}
        <div class="m-auto p-4">
            <p class="text-center text-3xl font-bold">No images</p>
            <p class="text-center">You haven't uploaded any images.</p>
        </div>
        {/if}
        <div class="grid grid-cols-2 items-center gap-4">
            {#each images as image}
                <Card title={image.file_name}>
                    <div class="flex flex-col justify-center items-center">
                        <img on:keydown={()=>window.open(`https://${image.file_url}`, "_blank")} on:click={()=>window.open(`https://${image.file_url}`, "_blank")} src="https://{image.file_url}" alt={image.file_name} class="w-56 py-4 h-auto" />
                        <div class="flex gap-4">
                            <button on:click={()=>deleteImage(image.upload_id)} class="ease-out duration-200 hover:px-6 px-4 py-1 rounded-lg bg-red-500 shadow-lg shadow-red-500/60">
                                Delete
                            </button>
                            <button on:click={()=>{navigator.clipboard.writeText("https://" + image.upload_url); toast.push("URL has been copied to your clipboard", success)}} class="ease-out duration-200 hover:px-6 px-4 py-1 rounded-lg bg-cyan-500 shadow-lg shadow-cyan-500/60">Copy URL</button>
                        </div>
                    </div>
                   
                </Card>
            {/each}
        </div>
    </div>
    {/if}
</div>
