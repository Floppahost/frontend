import { writable } from 'svelte/store';

export const admin = writable(false);
export const loggedIn = writable(true);
export const username = writable("");
export const uid = writable(0);