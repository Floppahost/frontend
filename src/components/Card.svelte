<script>
    export let title;
    export let additional = '';
</script>

<div class="p-4 bg-neutral-800/75 rounded-3xl transition-all duration-300 {additional}">
    <h3 class="max-w-sm font-extrabold text-left text-3xl text-ellipsis overflow-hidden">{title}</h3>
    <slot />
</div>