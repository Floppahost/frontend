import { writable } from "svelte/store";

export let states = writable({
    modals: {
        embed: false,
        file: false,
        password: false
    }
});