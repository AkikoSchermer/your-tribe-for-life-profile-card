export async function load  ({ url }) {
// const membersResponse = await fetch (`https://fdnd.directus.app/items/person?fields=*,squads.squad_id.name,squads.squad_id.cohort,squads.squad_id.tribe.name&filter[squads][squad_id][cohort][_eq]=2526&filter[squads][squad_id][tribe][name][_eq]=FDND%20Jaar%202`);
// const membersResponse = await fetch (`https://fdnd.directus.app/items/person?fields=*,squads.squad_id.name,squads.squad_id.cohort,squads.squad_id.tribe.name&filter[squads][squad_id][cohort][_eq]=2526&filter[squads][squad_id][tribe][name][_eq]=FDND%20Jaar%202&limit=20&page=0&_sort=jaar`);
try {

const personResponse = await fetch(`https://fdnd.directus.app/items/person/25`)
const personData = await personResponse.json();

if (!personResponse.ok) {
    throw new Error('Failed to fetch person data');
  }

  console.log(personData)

return {person: personData.data};


} catch (err) {
    console.error(err);
    return { person: null };
  }

}