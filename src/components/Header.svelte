<script>
    import {push} from 'svelte-spa-router'

    let paths = [
        'dashboard',
        'settings',
        'gallery'
    ]

    let selected;
</script>

<div class="flex justify-center items-center p-4 absolute m-auto left-0 right-0">
    <div class="flex space-x-2 w-96">
        <img src="/logo.png" alt="logo" class="w-12 mr-16">
        <select bind:value={selected} class="bg-neutral-800 text-sm border border-neutral-700 px-2 w-full" on:change={() => push("/" + selected)}>
            {#each paths as path}
                <option value={path}>
                    {path}
                </option>
		    {/each}
        </select>
    </div>
</div>
<slot />
