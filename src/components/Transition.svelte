<script>
	import { blur } from 'svelte/transition';
	export let path = '';
</script>

{#key path}
	<div in:blur={{ duration: 500 }}>
		<slot />
	</div>
{/key}