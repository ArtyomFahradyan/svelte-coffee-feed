<script lang="ts">
  import Notes from '../notes/Notes.svelte';
  import {createLoadObserver} from './util.ts';
  import Loader from '../loader/Loader.svelte';
  import './styles.scss';
  import type {Coffee} from '@svelte-app/types/coffee';
  export let coffee: Coffee;
  let isImageLoaded = false;
  const onload = createLoadObserver(() => {
    isImageLoaded = !isImageLoaded;
  });
</script>

<div class="card">
  <div class="img-wrapper">
    {#if !isImageLoaded}
      <Loader />
    {/if}
    <div>
      <p class="intensifier">{coffee.intensifier}</p>
      <img
        class="image"
        use:onload
        src={`https://loremflickr.com/500/240/coffee,bean/?random=${coffee.id}`}
        alt="Coffee bean"
      />
    </div>
  </div>
  <div class="info">
    <p>{coffee.origin}</p>
    <h2>{coffee.blend_name}</h2>
    <p>{coffee.variety}</p>
    <Notes notes={coffee.notes} />
  </div>
</div>
