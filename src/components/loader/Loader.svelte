<script lang="ts">
  import './styles.scss';

  export let relative = false;
</script>

{#if relative}
  <div class="relative">
    <div class="spin-wrapper">
      <div class="loader" />
    </div>
  </div>
{:else}
  <div class="spin-wrapper">
    <div class="loader" />
  </div>
{/if}
