<script>
    import { onMount } from "svelte";
    import NotFound from "./NotFound.svelte";

    let file = {};
    let err = false

    let fileType = ""
    onMount(async () => {
        const path = location.hash.split('/')
        const uploadId = path[2]
        await fetch("https://api.floppa.host/files/render/" + uploadId).then((res)=>res.json().then((data)=>{
            if (res.status !== 200) {
                err = true
            }
                if (data.data !== undefined){
                file = data.data
                if (data.data.mime_type.includes("image")) {
                    fileType = "image"
                } else if (data.data.mime_type.includes("video")) {
                    fileType = "video"
                }}
        }))
    })
    
</script>

<svelte:head>
    <title>{file.file_name === undefined ? "Loading..." : file.file_name }</title>
    <meta property="og:title" content={file.title}>
    <meta property="og:description" content={file.description}>
    <meta name="twitter:title" content={file.title}>
    <meta name="twitter:description" content={file.description}>

    {#if fileType === "image"}
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:image" content={`https://${file.file_url}`}>
    <meta name="twitter:image:src" content={`https://${file.file_url}`}>
    <meta property="og:image" content={`https://${file.file_url}`}>
    <link type="application/json+oembed" href={`https://api.floppa.host/files/embed?author_name=${file.author}&author_url=${file.author_url}&provider_name=${file.site_name}&provider_url=${file.site_name_url}&`}>
    {:else if fileType === "video"}
    <meta name="twitter:video" content="https://${file.file_url}">
    <meta name="twitter:video:src" content="https://${file.file_url}">
    <meta name="og:video" content="https://${file.file_url}">
    {/if}
    <meta name="theme-color" content={file.color}>
    <meta name="robots" content="noindex">
</svelte:head>

<main>
{#if !err}
{#if file.username !== undefined}
<div class="flex h-screen">
    <div class="m-auto">
        <div class="flex flex-col items-center justify-center p-4 bg-neutral-800/75 rounded-3xl">
            <h1 class="text-center font-extrabold text-3xl">{file.file_name}</h1>
            <img on:keydown={()=>window.open("https://" + file.file_url, "_blank")} on:click={()=>window.open("https://" + file.file_url, "_blank")} src={"https://" + file.file_url} alt={file.file_name} class="py-2 max-w-[32rem] rounded-3xl" />
            <div class="text-center">
                <p>Uploaded by: <b>{file.username} ({file.user_id})</b></p>
            </div>
        </div>
    </div>
</div>
{/if}
{/if}

{#if err}
<NotFound/>

{/if}
</main>