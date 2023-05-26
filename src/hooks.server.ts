import type {Coffee} from "@svelte-app/types/coffee";

/** @type {import('@sveltejs/kit').Handle} */
export async function getCoffee(): Promise<Coffee> {
    const res = await fetch("https://random-data-api.com/api/coffee/random_coffee");

    return res.json();
}