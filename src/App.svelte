<script lang="ts">
  import {onMount} from 'svelte';
  import {getCoffee} from '@svelte-app/hooks.server';
  import {apiData} from './store.ts';
  import Loader from '@svelte-app/components/loader/Loader.svelte';
  import Card from '@svelte-app/components/card/Card.svelte';
  import type {Coffee} from '@svelte-app/types/coffee';
  import {debounce} from '@svelte-app/utils/debounce';
  import './styles.scss';
  import './global.scss';

  onMount(addCoffee);

  let main;
  let timer;
  let isLoading = false;
  async function addCoffee() {
    isLoading = true;
    try {
      const data: Coffee = await getCoffee();
      $apiData = [...$apiData, data];
      timer = debounce({callBack: addCoffee, timer, timeout: 30000});
    } catch (e) {
      console.error(e);
    }
    isLoading = false;
    setTimeout(() => {
      main.scrollIntoView(0);
    }, 300);
  }
</script>

<svelte:head>
  <title>Coffee feed</title>
  <meta name="description" content="Svelte demo coffee feed" />
</svelte:head>

<main bind:this={main}>
  {#if $apiData.length === 0}
    <Loader relative />
  {:else}
    <div class="cards">
      {#each $apiData as coffee, i}
        <Card {coffee} index={i} />
      {/each}
    </div>
  {/if}
  <button class="add" disabled={isLoading} on:click={addCoffee}>+</button>
</main>
