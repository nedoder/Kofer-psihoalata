<template>
    <div>
        <div class="loader-wrapper">
       <svg viewbox="0 0 80 80">
	<path d="M 35 38 L 28 43 L 24 38 L 16 42 L 8 39 L 6 31 L 13 31 L 18 24 L 5 24 L 11 16 L 14 20 L 18 11 L 32 5 L 20 18 L 31 12 L 38 5 L 50 5 L 39 12 L 35 22 L 30 18 L 23 23 L 17 35 L 26 32 L 26 28 L 30 24 L 31 34 L 38 31 L 35 27 L 42 23 L 43 33 L 48 31 L 44 17 L 47 13 L 51 25 L 58 20 L 50 10 L 59 9 L 59 15 L 63 12 L 63 18 L 69 17 L 74 26 L 67 21 L 58 25 L 53 34 L 42 38 L 42 42 L 27 48 L 32 51 L 39 48 L 48 46 L 51 41 L 56 42 L 56 37 L 62 35 L 61 29 L 68 29 L 73 32 L 72 39 L 74 45 L 72 55 L 67 52 L 68 46 L 67 36 L 63 40 L 57 47 L 48 53 L 39 53 L 35 57 L 44 59 L 56 54 L 62 48 L 63 56 L 67 57 L 61 60 L 54 59 L 51 64 L 56 64 L 53 69 L 58 71 L 55 76" fill="none" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
<!-- <header-component/>
<hero-section/> -->
        <under-construction/>
    </div>
</template>

<script>

import UnderConstruction from './UnderConstruction.vue'
// import HeaderComponent from './HeaderComponent.vue'
// import HeroSection from './HeroSection.vue';
export default {
  name: 'HomePage',
  components: {
      // HeaderComponent, HeroSection
      UnderConstruction
  },
 mounted() {
   window.addEventListener("load", function() {
    // setTimeout(4000)
    document.getElementsByClassName("loader-wrapper")[0].style.display = 'none';
})

  }
}
</script>

<style scoped>

.loader-wrapper {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
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
/* 	border:2px solid red; */
	height:150px;
	width:150px;
}
/* path length */
/* 670.0289916992188 */

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
