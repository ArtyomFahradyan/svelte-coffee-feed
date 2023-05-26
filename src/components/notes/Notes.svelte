<script lang="ts">
  import './styles.scss';
  export let notes;
</script>

<div class="list">
  {#each notes.split(', ') as note}
    <p class="tag">{note}</p>
  {/each}
</div>
