<script>

let { data } = $props();

const members = data.members.data;

</script>


<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<ul>
{#each members as member}
<li>
<a href="/{member.id}">
    {member.name} - {member.bio} 
    <img src="{member.avatar}" alt="Avatar van {member.name}" />
</a><br>
</li>
{/each}
</ul> 