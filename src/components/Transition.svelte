<script>
	import { fly } from 'svelte/transition';
	export let path = '';
</script>

{#key path}
	<div in:fly={{ y: 20, duration: 500 }}>
		<slot />
	</div>
{/key}