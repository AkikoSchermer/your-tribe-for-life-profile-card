export async function load  ({ url }) {
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