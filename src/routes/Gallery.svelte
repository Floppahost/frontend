<script>
    import Image from "../lib/Image.svelte";
</script>

<div class="grid w-max min-h-screen m-auto">
    <div class="m-auto rounded border border-cyan-400 text-sm ">
        <p><b>barius's</b> images</p>
    </div>
    <div
        class="m-auto rounded-lg grid grid-cols-2 text-sm border space-x-1 w-max border-cyan-400"
    >
        <Image
            src="https://deelay.me/1000/https://icon-library.com/images/document-icon/document-icon-15.jpg"
        />
        <Image
            src="https://deelay.me/1000/https://icon-library.com/images/document-icon/document-icon-15.jpg"
        />
    </div>
</div>
