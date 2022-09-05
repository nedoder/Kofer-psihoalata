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
//  mounted() {
//     window.addEventListener("load", function() {
//       document.getElementsByClassName("loader-wrapper")[0].style.display = 'none';
//     })
//   }
}
</script>

<style scoped>

.loader-wrapper {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 30;
}

svg{
	position:absolute;
	top:50%;
	left:50%;
	transform:translate(-50%,-50%);
	height:12rem;
	width:12rem;
}


path {
  stroke-dasharray: 670;
  stroke-dashoffset: 670;
  animation: dash 4s linear infinite;
}

@keyframes dash {
	0%{opacity:1;}
  80% {
    stroke-dashoffset: 0;
		opacity:1;
  }
	90%{
		stroke-dashoffset: 0;
		opacity:1
	}
	100%{
		stroke-dashoffset: 0;
		opacity:0;
	}
}
</style>
