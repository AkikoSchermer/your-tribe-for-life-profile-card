<script>
  export let data;
  const person = data.person;
</script>

<main>

<section>

    <div class="lines">
        <div class="line">
        </div>
        <div class="line">
        </div>
        <div class="line">
        </div>
    </div>

    <img src="{person.avatar}" alt="Avatar van {person.name}" class="profile-img" />
        <h1 class="text-block">{person.name}</h1>


</section>

</main>

<style>

:root {
  --card-bg-color: #DAC4AC ;
  --card-border-color: white ;
  --line-color: white ;
  --text-block-bg-color: white;
  --text-box-border-color: white ;
}
    /* kleurtjes */
    /* brown */
    /* lightgrey */
    /* white */

main {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh; 
    font-family: 'Montserrat', sans-serif;
}    

section {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    height: 600px;
    width: 300px;
    margin: 0 auto;
    border: 2px solid var(--card-border-color);
    border-radius: 20px;
    background-color: var(--card-bg-color);
    box-shadow: #DAC4AC;
}    

.lines {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 10px;
    padding-top: 20px;
    padding-bottom: 60px;
}  

.line {
    width: 80px;
    border: 1px solid var(--line-color);
}

.profile-img {
    object-fit: cover;
    height: 300px;
}

.text-block {
    font-size: 1.2em;
    font-weight: 300;
    margin-top: 100px;
    width: 200px;
    height: fit-content;
    border-radius: 20px;
    border: 2px solid var(--text-box-border-color);
    background-color: var(--text-block-bg-color);
    text-align: center;
}

</style>
