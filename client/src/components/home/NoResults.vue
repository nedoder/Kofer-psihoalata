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
  margin: 0 auto;
}

.no-results h3 {
    text-align: center;
    font-size: 1.5rem;
    padding: 2rem 0;
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