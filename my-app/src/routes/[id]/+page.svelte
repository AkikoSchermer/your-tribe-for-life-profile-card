
<script>
    export let data;
    const { member } = data;
  </script>

<section>

    <div class="lines">
        <div class="line">
        </div>
        <div class="line">
        </div>
        <div class="line">
        </div>
    </div>

    <img src="{member.avatar}" alt="Avatar van {member.name}" class="profile-img" />
    <!-- <p>{member.bio}</p> -->

    <!-- <section class="text-block"> -->
        <h1 class="text-block">{member.name}</h1>
    <!-- </section> -->

</section>

<style>

    /* kleurtjes */
    /* brown */
    /* lightgrey */
    /* white */

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
    /* display: flex;
    justify-content: center;
    align-items: center; */
    object-fit: cover;
    /* margin: 0 auto; */
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

<!--  
    {#each members as member}
    <a href="/{member.id}">
       <h1> {member.name}</h1> - {member.bio} 
        <img src="{member.mugshot}" alt="Avatar van {member.name}" />
    </a><br>
    {/each}  -->