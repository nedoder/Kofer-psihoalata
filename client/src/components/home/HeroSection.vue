<template>
<div class="hero" id="home">
    <div class="hero-left">
      <h2>Lorem ipsum dolor sit amet.</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eius necessitatibus at perferendis magnam eligendi temporibus quod exercitationem quibusdam voluptas?</p>
      <div class="hero-buttons">
        <a href="/about-us">O nama</a>
      </div>
    </div>
    <div class="hero-right">
      <img src="../../assets/hero1.png" alt="">
    </div>
</div>
</template>

<script>
export default {
  name: 'HeroSection',
}
</script>

<style>
.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  left: 0; top: 0; right: 0; bottom: 0;  
  border-bottom-right-radius: 15%;
  border-bottom-left-radius: 15%;
  background: linear-gradient(to right, #C4CBC5, #A497A6);
  /* background: linear-gradient(to right, #C4CBC5, #D6B7CF); */
  z-index: 1;
}
.hero-left {
  width: 50%;
  padding-left: 10%;
}
.hero-buttons {
  padding-top: 10px;
  display: flex;
  column-gap: 20px;
}
.hero-buttons a {
  color: #fff;
  padding: 10px 20px;
  border: 1px solid #fff;
  border-radius: 10px;
}
.hero-left a:first-child {
  background: var(--color-teal-800);
  border: 0;
}
.hero-left p {
  padding: 20px 0;
  color: #fff;
}
.hero-right {
  width: 50%;
  /* filter: drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5)); */
   filter: drop-shadow(-2px 7px 6px #7E7E92);
}
.hero-right img{
  width: 100%;
  clip-path: circle();
  /* box-shadow: var(--shadow-small) */
}
@media (max-width: 1200px) {
  .hero-left {
    width: 40%
  }
   .hero-right {
    width: 60%
  }
}
@media (max-width: 992px) {
  .hero {
    height: calc(100vh - 4rem);
  }
  .hero-left {
    width: 30%;
    z-index: 1;
  }
   .hero-right {
    width: 70%
  }
}
@media (max-width: 768px) {
  
  .hero-left {
    width: 40%;
    z-index: 1;
  }
  .hero-left h2 {
    font-size: 60px;
  }
   .hero-right {
    width: 60%;
  }
}
</style>