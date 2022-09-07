<template>
    <div>
        <header-component/>
        <div class="not-found">
            <h4>Stranica nije pronađena...</h4>
            <div class="notfound-img">
                <img src="../../assets/notfound.png"/>
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
    width: 100%;
    margin: 0 auto;
    text-align: center;
    padding-top: 6rem;
}

.notfound-img img {
    max-height: 75vh;
}

.not-found  h4 {
  font-family: 'Ribeye Marrow', cursive;
  font-size: 3rem;
  margin: 1rem 0;
  color: var(--light-black);
}

@media (max-width: 768px) {
    .not-found  h4 {
        font-size: 2rem;
    }
}
</style>