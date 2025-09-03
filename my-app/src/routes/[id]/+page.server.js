export async function load ({ url, params }) {
    const memberResponse = await fetch(`https://fdnd.directus.app/items/person/` + params.id);
    const memberData = await memberResponse.json();

    console.log(memberData.data)
    return {member: memberData.data};

}