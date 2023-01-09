<script>
    export let open = false
    export let title;
</script>

<section  class={`flex justify-center items-center top-0 left-0 w-screen h-screen absolute`} style={`visibility: ${open ? "visible" : "hidden"}; transition: 0.3s cubic-bezier(0.37, 0, 0.63, 1); background-color: rgba(0, 0, 0, ${open ? "0.25" : "0"})`}>
    <article class={`max-w-[24rem] min-w-[12rem] z-[2000] backdrop-blur-lg shadow-lg bg-[#191621] p-4 rounded-3xl`} style={`transition: 0.6s cubic-bezier(0.37, 0, 0.63, 1); opacity: ${open ? "1" : "0"}`}>
            <div class="w-full flex text-center justify-between">
                <h3 class="font-bold">{title}</h3>
                <button on:click={() => open = false} class="duration-300 transition-colors px-2 rounded-sm close-modal-btn">X</button>
            </div>
            <div class="mb-2 mt-1 w-full h-[2px] bg-cyan-500"/>
            <div class="flex flex-col w-auto">
                <slot/>
            </div>
    </article>
</section>