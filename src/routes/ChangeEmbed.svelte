<script>
import Modal from "../components/core/Modal.svelte"
let isModalOpen = false
</script>

<div class="flex h-screen">
    <div class="m-auto sm:w-1/3 w-full">
        <div class="grid sm:grid-cols-2 grid-cols-1 gap-4 w-full mx-auto">
            <div class="grid backdrop-blur-lg w-full mx-40 bg-cyan-400/10 rounded-3xl">
            <button on:click={()=>isModalOpen = true}>Modify embed</button>
            </div>
            <Modal onClose={()=>isModalOpen = false} isOpen={isModalOpen} title={"Change your embed settings"}>
           <div class="flex flex-col gap-4">
            <div class="form-check form-switch justify-center">
                <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer">
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-cyan-100 dark:peer-focus:ring-cyan-700 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-cyan-400"></div>
                    <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle embeds?</span>
                  </label>
            </div>
            <input type="text"
            placeholder="Embed site name"
            class="text-white w-80 bg-transparent border border-cyan-400 outline-none text-sm px-2 py-1"
            />
            <input type="text"
            placeholder="Embed site name url"
            class="text-white w-80 bg-transparent border border-cyan-400 outline-none text-sm px-2 py-1"
            />
            <input type="text"
            placeholder="Embed author"
            class="text-white w-80 bg-transparent border border-cyan-400 outline-none text-sm px-2 py-1"
            />
            <input type="text"
            placeholder="Embed author url"
            class="text-white w-80 bg-transparent border border-cyan-400 outline-none text-sm px-2 py-1"
            />
            <input type="text"
            placeholder="Embed title"
            class="text-white w-80 bg-transparent border border-cyan-400 outline-none text-sm px-2 py-1"
            />
            <input type="text"
            placeholder="Embed description"
            class="text-white w-80 bg-transparent border border-cyan-400 outline-none text-sm px-2 py-1"
            />
           </div>
           <button
           class="flex text-white mx-auto w-32 mt-1 bg-cyan-400 outline-none text-sm px-2 font-semibold py-1 my-auto"
           type="submit"
           >Change embed settings</button>
            </Modal>
        </div>
    </div>
</div>