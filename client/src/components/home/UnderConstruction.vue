<template>
<div class="hero" id="home">
    <div class="hero-middle">
      <img src="../../assets/underconstruction1.png" alt="Under construction">
    </div>
</div>
</template>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  height: 100vh;  
  background: #D3CCE3;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #E9E4F0, #D3CCE3);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #E9E4F0, #D3CCE3); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  z-index: 1;
}

.hero-middle {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hero-middle img{
  width: 80%;
  height: auto;
}

@media (min-width: 120px) {
  
 .hero-middle img{
  width: 60%;
}
}

@media (max-width: 768px) {
  
 .hero-middle img{
  width: 100%;
}

}

</style> 