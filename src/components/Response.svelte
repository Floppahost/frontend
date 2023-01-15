<script>
    export let message;
    export let status;
</script>

{#if status == 200}
<div class="w-80 bg-lime-500 text-sm px-2 py-px my-auto text-center rounded-lg mb-3">
    <p class="font-bold">{message}</p>
</div>
{:else if status != null}
<div class="w-80 bg-red-500 text-sm px-2 py-px my-auto rounded-lg mb-3">
    <p class="font-bold">{message}</p>
</div>
{/if}