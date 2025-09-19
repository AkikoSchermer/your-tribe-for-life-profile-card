<script>
  let { data } = $props();

  const members = data.members.data;
  const member = members.find((m) => m.id === 25);
</script>

{#if member}
  <a href="/{member.id}">
    <p>{member.name}</p>
  </a>
{:else}
  <p>Lid niet gevonden</p>
{/if}
