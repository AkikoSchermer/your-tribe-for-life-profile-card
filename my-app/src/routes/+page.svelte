<script>

//   let { data } = $props();
export let data;
  const person = data.person;

</script>

{#if person}
    <p>{person.name}</p>
{:else}
  <p>Lid niet gevonden</p>
{/if}
