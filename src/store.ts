import {writable} from 'svelte/store';
import type {Writable} from 'svelte/store';
import type {Coffee} from "@svelte-app/types/coffee";

/** Store for your data.
 This assumes the data you're pulling back will be an array.
 **/
export const apiData: Writable<Coffee[]> = writable([]);
