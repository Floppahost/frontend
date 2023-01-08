<script>
import Modal from "../components/core/Modal.svelte"
let isModalOpen = false
let oldPassword = ""
let newPassword = ""
</script>

<div class="flex h-screen">
    <div class="m-auto sm:w-1/3 w-full">
        <div class="grid sm:grid-cols-2 grid-cols-1 gap-4 w-full mx-auto">
            <button on:click={()=>isModalOpen = true}>hello</button>
            <Modal onClose={()=>isModalOpen = false} isOpen={isModalOpen} title={"Reset your password"}>
           <div class="flex flex-col gap-2">
            <input
            placeholder="Old password"
            class="text-white w-80 bg-transparent border border-cyan-400 outline-none text-sm px-2 py-1"
            bind:value={oldPassword}
            />
            <input
            placeholder="New password"
            class="text-white w-80 bg-transparent border border-cyan-400 outline-none text-sm px-2 py-1"
            bind:value={newPassword}
            />
           </div>
           <button
           class="flex text-white w-32 mt-1 bg-cyan-400 outline-none text-sm px-2 font-semibold py-1 my-auto"
           type="submit"
           >Reset Password</button>
            </Modal>
        </div>
    </div>
</div>