<script>
    export let isOpen = false
    export let onClose
    export let title = ""

</script>

<!-- backdrop -->

<section  class={`pointer-events-${isOpen ? "auto" : "none"} flex justify-center items-center top-0 left-0 w-screen h-screen absolute`} style={`visibility: ${isOpen ? "visible" : "hidden"}; transition: 0.6s cubic-bezier(0.37, 0, 0.63, 1); background-color: rgba(0, 0, 0, ${isOpen ? "0.25" : "0"})`}>
    <article class={`max-w-[24rem] min-w-[12rem] z-[2000] backdrop-blur-lg shadow-lg bg-[#191621] p-4 pointer-events-${isOpen ? "auto" : "none"} `} style={`transition: 0.6s cubic-bezier(0.37, 0, 0.63, 1); opacity: ${isOpen ? "1" : "0"}`}>
            <div class="w-full flex text-center justify-between">
                <h3>{title}</h3>
                <button on:click={onClose} class="duration-300 transition-colors px-2 rounded-sm close-modal-btn">X</button>
            </div>
            
            <!-- divider -->
            <div class="mb-2 mt-1 w-full h-[2px] bg-cyan-500"/>
            
            <!-- content -->
            <div class="flex flex-col">
                <slot/>
            </div>
    </article>
</section>


