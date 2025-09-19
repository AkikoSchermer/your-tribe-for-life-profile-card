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
  --text-border-font-color: black;
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
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    /* height: 550px; */
    height: 500px;
    width: 300px;
    /* margin: 0 auto; */
    border: 2px solid var(--card-border-color);
    border-radius: 20px;
    background-color: var(--card-bg-color);
    box-shadow: #DAC4AC;
    overflow: hidden;
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
    transition: transform 0.3s ease-in-out;
}

.line:hover {
  transform: scale(1.1);

}

section .profile-img {
    object-fit: cover;
    width: 100%;
    /* height: 300px; */
    /* height: 100%; */
    transition: transform 0.3s ease-in-out;
}

section .profile-img:hover {
    transform: scale(1.2);
}

.text-block {
    font-size: 1.2em;
    font-weight: 300;
    margin-top: 50px;
    width: 200px;
    height: fit-content;
    border-radius: 20px;
    border: 2px solid var(--text-box-border-color);
    background-color: var(--text-block-bg-color);
    text-align: center;
    transition: transform 0.3s ease-in-out;
}

.text-block:hover {
    color: var(--text-border-font-color);
    transform: scale(1.1);
}

</style>
