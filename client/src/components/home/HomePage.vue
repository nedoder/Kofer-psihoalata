<template>
  <div>
    <header-component/>
    <hero-section/>
    <about-us/>
    <category-list/>
    <partner-list/>
    <footer-component/>
    <!-- <under-construction/> -->
  </div>
</template>

<script>

// import UnderConstruction from './UnderConstruction.vue'
import HeaderComponent from './HeaderComponent.vue';
import HeroSection from './HeroSection.vue';
import AboutUs from './AboutUs.vue';
import CategoryList from './CategoryList.vue';
import PartnerList from './PartnerList.vue'
import FooterComponent from './FooterComponent.vue';


export default {
  name: 'HomePage',
  components: {
      HeaderComponent, HeroSection, AboutUs, CategoryList, PartnerList, FooterComponent
      // UnderConstruction
  },

}
</script>


