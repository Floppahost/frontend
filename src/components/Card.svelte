<script>
    export let title;
    export let additional = '';
</script>

<div class="p-4 bg-neutral-800/75 rounded-3xl transition-all duration-300 {additional}">
    <p class="font-extrabold text-left text-3xl">{title}</p>
    <slot />
</div>