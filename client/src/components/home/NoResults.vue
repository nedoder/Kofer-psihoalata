<template>
    <div class="no-results">
        <h3>Nema rezultata za ovu kategoriju...</h3>
        <div class="no-results-img">
            <img src="../../assets/noposts.webp" alt="No results"/>
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
  width: 90%;
  text-align: center;
  position: relative;
  margin: 0 auto;
  top: -7rem;
  padding: 1rem;
}

.no-results h3 {
    margin: 2rem 0;
    text-align: center;
    font-size: 1.5rem;
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