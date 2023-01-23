<script>
	import { fade } from 'svelte/transition';
	export let path = '';
</script>

{#key path}
	<div in:fade={{ duration: 500 }}>
		<slot />
	</div>
{/key}