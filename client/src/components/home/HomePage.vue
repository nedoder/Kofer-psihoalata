<template>
  <div>
    <header-component/>
    <hero-section/>
    <category-list/>
    <about-us/>
    <footer-component/>
    <!-- <under-construction/> -->
    <!-- <coming-soon/> -->
  </div>
</template>

<script>

// import UnderConstruction from './UnderConstruction.vue'
// import ComingSoon from '../home/ComingSoon.vue'
import HeaderComponent from './HeaderComponent.vue';
import HeroSection from './HeroSection.vue';
import AboutUs from './AboutUs.vue';
import CategoryList from './CategoryList.vue';
import FooterComponent from './FooterComponent.vue';


export default {
  name: 'HomePage',
  components: {
      HeaderComponent, HeroSection, AboutUs, CategoryList, FooterComponent
      // UnderConstruction
      // ComingSoon
  },

}
</script>


