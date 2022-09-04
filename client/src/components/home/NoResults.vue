<template>
    <div class="no-results">
        <h4>Nema rezultata za ovu kategoriju...</h4>
        <div class="no-results-img">
            <img src="../../assets/noposts.png"/>
        </div>
    </div>   
</template>

<script>
    export default {
      name: 'NoResults',
    }
</script>

<style>
  
.no-results {
  width: 100%;
  text-align: center;
  position: relative;
  top: 6rem;
  margin: 0 auto;
  margin-bottom: 5rem;
}

.no-results h4 {
    font-family: 'Ribeye Marrow', cursive;
    font-size: 1.5rem;
    margin: 2rem 0;
    color: var(--light-black);
}

.no-results-img img {
    height: 50vh;
    width: auto;
}

@media (max-width:500px) {
    .no-results-img img {
        height: 100%;
    }
}
</style>