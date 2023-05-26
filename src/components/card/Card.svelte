<script lang="ts">
  import Notes from '@svelte-app/components/notes/Notes.svelte';
  import {createLoadObserver} from './util.ts';
  import Loader from '@svelte-app/components/loader/Loader.svelte';
  import type {Coffee} from '@svelte-app/types/coffee';
  export let coffee: Coffee;
  export let index: number;
  export let isImageLoaded = false;
  const onload = createLoadObserver(() => {
    isImageLoaded = !isImageLoaded;
  });
</script>

<div class="card">
  <div class="img-wrapper">
    {#if !isImageLoaded}
      <Loader />
    {/if}
    <img
      class="image"
      use:onload
      src={`https://loremflickr.com/300/240/coffee,bean/?random=${index}`}
      alt="Coffee bean"
    />
  </div>
  <div class="info">
    <p>{coffee.origin}</p>
    <h2>{coffee.blend_name}</h2>
    <p>{coffee.variety}</p>
    <Notes notes={coffee.notes} />
  </div>
</div>

<style>
  .info {
    margin-top: 12px;
    text-align: left;
    padding: 20px;
  }
  .img-wrapper {
    position: relative;
    width: 100%;
    height: 240px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .image {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 240px;
    border-radius: 8px 8px 0 0;
  }

  .card {
    margin: 1rem;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  }
  h2 {
    font-size: 16px;
  }
  p {
    font-size: 12px;
    margin: 0.25rem 0;
    color: #586767;
  }
</style>
