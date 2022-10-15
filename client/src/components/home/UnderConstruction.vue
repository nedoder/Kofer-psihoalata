<template>
  <div class="hero" id="home">
    <div class="hero-middle">
      <img src="../../assets/underconstruction.webp" alt="Under construction">
    </div>
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  height: 100vh;  
  background: var(--white);  /* fallback for old browsers */
  background: var(--gradient);
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