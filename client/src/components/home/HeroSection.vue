<template>
<div>
<div class="hero" id="home">
    <div class="hero-left">
      <h2>Lorem ipsum dolor sit amet.</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eius necessitatibus at perferendis magnam eligendi temporibus quod exercitationem quibusdam voluptas?</p>
      <div class="hero-buttons">
        <a href="#">Postani volonter</a>
         <a href="#">Podrži nas</a>
      </div>
    </div>
    <div class="hero-right">
      <img src="../../assets/herodesno1.png" alt="">
    </div>
</div>
<div class="icon">
  <font-awesome-icon icon="chevron-down" />
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
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 calc(5% + 1rem);
  left: 0; top: 0; right: 0; bottom: 0;  
  border-bottom-right-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
  padding-top: 4rem;
  background: linear-gradient(to right, #C4CBC5, #A497A6);
  /* background: url(../../assets/hero9.png); */
  /* background: linear-gradient(to right, #C4CBC5, #D6B7CF); */
  z-index: 1;
}

.hero h2 {
  font-family: 'Londrina Outline', cursive;
  font-size: 80px;
}
/* .hero-left {
  width: 50%;
} */
.hero-buttons {
  padding-top: 10px;
  display: flex;
  column-gap: 20px;
  text-align: center;
 
}
.hero-buttons a {
  /* color: #fff;
  padding: 10px 20px;
  border: 1px solid #fff;
  border-radius: 10px; */

  color: #fff;
  width: 170px;
  position: relative;
  border-radius: 18px;
  padding: 10px 20px;
   box-shadow: 6px 5px 16px #c4cbc5, -3px -2px 16px #7e7e92;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}


.hero-left a:first-child {
  background: var(--color-teal-800);
}
.hero-left p {
  padding: 20px 0;
  color: #fff;
}
.hero-right {
  /* width: 50%; */
  /* filter: drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5)); */
   filter: drop-shadow(-2px 10px 7px #7E7E92);
}

.icon {
  width: 100%;
  margin: 0 auto;
  text-align: center;
  
}

.icon svg {
  font-size: 48px;
  color: #A497A6;
  padding: 5px;
   animation: scrollDown1 1.5s ease infinite;
  
}

@keyframes scrollDown1{
    0%{
        transform: translateY(-15px);
        opacity: 0;
    }
    50%{
        transform: translateY(0px);
        opacity: 1;
    }
    100%{
        transform: translateY(15px);
        opacity: 0;
    }
}

/* .hero-right img{
  width: 120%;
 
} */
@media (max-width: 1200px) {
  /* .hero-left {
    width: 40%
  }
   .hero-right {
    width: 60%
  } */

  .hero h2 {
  font-size: 60px;
}
}
@media (max-width: 992px) {
  /* .hero {
    height: calc(100vh - 4rem);
  } */
  /* .hero-left {
    width: 30%;
    z-index: 1;
  }
   .hero-right {
    width: 70%
  } */

  .hero h2 {
  font-size: 50px;
}
}
@media (max-width: 768px) {
  
  /* .hero-left {
    width: 40%;
    z-index: 1;
  }
  .hero-left h2 {
    font-size: 60px;
  }
   .hero-right {
    width: 60%;
  } */

  .hero h2 {
  font-size: 40px;
}

@media (max-width: 600px) {
  .hero {
     background: url(../../assets/hero10.jpg);
     background-size: cover;
     background-repeat: no-repeat;
  }

  .hero-right {
    display: none;
  }
}
}


</style>