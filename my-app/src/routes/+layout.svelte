<script>
  import favicon from "$lib/assets/favicon.svg";

  export let data;
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<!-- <header>
  <nav>
    <a href="/">Home</a>
  </nav>
</header> -->

<main class="home">
  <slot />
</main>

<style>
  .home {
    background-color: pink;
  }
</style>
