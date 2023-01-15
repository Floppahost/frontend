<script>
    import Card from "../components/Card.svelte";
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
    <div class="m-auto">
        <Card title="Dashboard">
            Welcome back, barius
        </Card>
    </div>
</div>
