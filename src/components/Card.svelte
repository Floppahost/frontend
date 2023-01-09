<script>
    export let title;
</script>

<div class="backdrop-blur-xl bg-black/50 p-4 rounded-3xl">
    <div class="flex">
        <h1 class="text-2xl font-black mb-px">{title}</h1>
    </div>
    <slot />
</div>