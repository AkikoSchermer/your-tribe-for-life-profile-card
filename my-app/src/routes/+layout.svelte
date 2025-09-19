<script>
  import favicon from "$lib/assets/favicon.svg";

  export let data;
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<main class="homepage">
  <slot />
</main>

<style>

</style>
