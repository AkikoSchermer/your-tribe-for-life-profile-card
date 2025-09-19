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

    /* kleurtjes */
    /* brown */
    /* lightgrey */
    /* white */


main {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh; 
}    

section {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    height: 600px;
    width: 300px;
    margin: 0 auto;
    border: 2px solid black;
    border-radius: 20px;
    background-color: beige;
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
    border: 2px solid black;
}

.profile-img {
    object-fit: cover;
    height: 300px;
}

.text-block {
    margin-top: 100px;
    width: 200px;
    height: 30px;
    border-radius: 20px;
    border: 2px solid black;
    background-color: lightgrey;
    text-align: center;
}

</style>
