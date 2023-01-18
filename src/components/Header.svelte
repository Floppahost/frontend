<script>
    import {push} from 'svelte-spa-router'
    import {loggedIn} from "../stores"

    let paths = [
        {name: 'home', path: "/"},
        {name: 'login', path: "/login"},
        {name: 'register', path: "/register"},
    ]

    loggedIn.subscribe((v)=>{
        if (v) {
        paths = [   
        {name: 'dashboard', path: "/dashboard"},
        {name: 'settings', path: "/dashboard/settings"},
        {name: 'gallery', path: "/dashboard/gallery"}
    ]
    }
    })
   
    let selected;
</script>

<div class="flex justify-center items-center h-16 bg-black z-[100] p-4 fixed left-0 right-0 m-auto top-0">
    <div class="flex space-x-2 w-96">
        <img src="/logo.png" alt="logo" class="w-12 mr-16">
        <select bind:value={selected} class="bg-neutral-800 text-sm border border-neutral-700 px-2 w-full" on:change={() => push(selected)}>
            {#each paths as path}
                <option value={path.path}>
                    {path.name}
                </option>
		    {/each}
        </select>
    </div>
</div>
<slot />
