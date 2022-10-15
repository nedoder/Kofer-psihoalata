<template>
    <div>
        <header-component/>
        <div class="not-found">
            <h3>Stranica nije pronađena...</h3>
            <div class="notfound-img">
                <img src="../../assets/notfound.webp" alt="Page not found"/>
            </div>
        </div>   
        <footer-component/>
    </div>
</template>

<script>

import HeaderComponent from './HeaderComponent.vue';
import FooterComponent from './FooterComponent.vue';

export default {
  name: 'NotFound',
  components: {
      HeaderComponent, FooterComponent
  },
 
}
</script>

<style scoped>
.not-found {
    width: 90%;
    margin: 0 auto;
    text-align: center;
    padding: 1rem;
    padding-top: 6rem;
}

.notfound-img img {
    max-height: 75vh;
}

.not-found h3 {
  margin: 1rem 0;
}

</style>