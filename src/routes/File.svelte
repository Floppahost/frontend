<script>
    import { onMount } from "svelte";

    let fileName = ""
    let uploadCdn = ""
    onMount(async ()=>{
        const url = location.href
        const splittedUrl = url.split('/')
        const fileId = splittedUrl[5]
        const data = await fetch(`http://127.0.0.1:4000/files/render/${fileId}`).then((res)=>res.json().then((data)=>{
            return data
        }))

        const message = data.message

        if (message === "Upload doesn't exist") {
            // handle error
            return 0;
        }

       const uploadData = data.data
       fileName = uploadData.file_name
       uploadCdn = "https://" + uploadData.file_url
    })
</script>
<div class="flex h-screen">
    <div class="m-auto sm:w-1/2">
        <div class="flex flex-col justify-center items-center">
            <div class="backdrop-blur-lg bg-cyan-400/10 p-4 rounded-3xl h-auto">
                <div class="flex space-x-2 flex-col justify-center items-center">
                    <div class="my-auto text-center flex flex-col gap-4">
                        <p class="text-2xl font-bold">{fileName}</p>
                     <button on:click={()=>location.href = uploadCdn}>
                        <img
                        src={uploadCdn}
                        alt="User's img"
                        class="max-w-[80vw] lg:max-w-[32rem] rounded-lg"
                    />
                     </button>
                       <ul>
                        <li class="text-1xl">File size: <strong>1.32KB</strong></li>
                        <li>
                            Uploaded by <strong>barius</strong>
                        </li>
                        <li>Uploaded at <strong>19:01:06</strong></li>
                       </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>