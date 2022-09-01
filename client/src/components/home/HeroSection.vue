<template>
<div>
<div class="hero" id="home">
  <div class="shape-blob"></div>
	<div class="shape-blob one"></div>
	<div class="shape-blob two"></div>
	<div class="shape-blob three"></div>
	<div class="shape-blob four"></div>
  <div class="shape-blob five"></div>
  <div class="shape-blob six"></div>
    <div class="hero-left">
      <h2>Lorem ipsum dolor sit amet.</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eius necessitatibus at perferendis magnam eligendi temporibus quod exercitationem quibusdam voluptas?</p>
      <div class="hero-buttons">
        <a href="/join-us">Postani volonter</a>
         <a href="#">Podrži nas</a>
      </div>
    </div>
    <div class="hero-right">
      <img src="../../assets/5.png" alt="">
    </div>
</div>
<div class="icon" id="icon">
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
  /* position: relative;
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
  z-index: 1; */

  background: #fff;
	min-height: 100vh;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	position: relative;
  padding: 0 calc(5% + 1rem);
}


.shape-blob {
	background: linear-gradient(to right, #C4CBC5, #A497A6);;
	height: 150px;
	width: 150px;
	border-radius: 30% 50% 20% 40%;
  animation: transform 20s ease-in-out infinite both alternate, movement_one 40s ease-in-out infinite both;
	opacity:.5;
	position: absolute;
	right: 0%;
	bottom: 10%;
}
.shape-blob.one{
	height: 150px;
	width: 150px;
	left: -5%;
	top: 50%;
	transform: rotate(-180deg);
	animation: transform 30s ease-in-out infinite both alternate, movement_two 60s ease-in-out infinite both;
}

.shape-blob.two{
	height: 150px;
	width: 150px;
	left: 15%;
	top: -50px;
	transform: rotate(-180deg);
	animation: transform 30s ease-in-out infinite both alternate, movement_two 60s ease-in-out infinite both;
}

.shape-blob.three{
	height: 150px;
	width: 150px;
	right: 10%;
	top: -50px;
	transform: rotate(-180deg);
	animation: transform 30s ease-in-out infinite both alternate, movement_two 60s ease-in-out infinite both;
}

.shape-blob.four{
	height: 150px;
	width: 150px;
	left: 20%;
	bottom: -5%;
	transform: rotate(-180deg);
	animation: transform 30s ease-in-out infinite both alternate, movement_two 60s ease-in-out infinite both;
}

.shape-blob.five{
	height: 150px;
	width: 150px;
	left: 30%;
	bottom: 30%;
	transform: rotate(-180deg);
	animation: transform 30s ease-in-out infinite both alternate, movement_two 60s ease-in-out infinite both;
}

.shape-blob.six{
	height: 150px;
	width: 150px;
	left: 60%;
	bottom: 60%;
	transform: rotate(-180deg);
	animation: transform 30s ease-in-out infinite both alternate, movement_two 60s ease-in-out infinite both;
}

@keyframes transform
{
    0%,
  100% { border-radius: 33% 67% 70% 30% / 30% 30% 70% 70%; } 
   20% { border-radius: 37% 63% 51% 49% / 37% 65% 35% 63%; } 
   40% { border-radius: 36% 64% 64% 36% / 64% 48% 52% 36%; } 
   60% { border-radius: 37% 63% 51% 49% / 30% 30% 70% 70%; } 
   80% { border-radius: 40% 60% 42% 58% / 41% 51% 49% 59%; } 
}


@keyframes movement_one
{
    0%,
  100% { transform: none; }
   50% { transform: translate(50%, 20%) rotateY(10deg) scale(1.2); }
}

@keyframes movement_two
{
    0%,
  500% { transform: none; }
   50% { transform: translate(50%, 20%) rotate(-200deg) scale(1.2);}
}


.hero h2 {
  font-family: 'Londrina Outline', cursive;
  font-size: 5em;
	letter-spacing: 2px;
	font-weight: 900;
	color: black;
	line-height: .9em;
	position: relative;
	text-shadow: 2px 3px 15px rgba(0,0,0,.15);
}
/* .hero-left {
  width: 50%;
} */
.hero-buttons {
  padding-top: 10px;
  display: flex;
  row-gap: 1rem;
  column-gap: 1rem;
  text-align: center;
 
}
.hero-buttons a {
  /* color: #fff;
  padding: 10px 20px;
  border: 1px solid #fff;
  border-radius: 10px; */

  color: black;
  width: 170px;
  position: relative;
  border-radius: 1rem;
  padding: 10px 20px;
 box-shadow:  1px 1px 9px #c4cbc5, 2px -2px 4px #7e7e92;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  backdrop-filter: blur(10px);
  transition: all .5s ease;
  
}

.hero-buttons a:hover {
  box-shadow:  4px 7px 12px #c4cbc5, 2px 4px 7px #7e7e92;
  transform: scale(0.97);
}

.hero-left a:first-child {
  color: #fff;
  background: var(--color-teal-800);
  background: #F4CB82;
  background: #D499AE;
}
.hero-left p {
  padding: 20px 0;
  color: black;
  text-align: justify;
}
/* .hero-right { */
  /* width: 50%; */
  /* filter: drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5)); */
   /* filter: drop-shadow(1px 5px 5px #7E7E92);  */
/* } */



.hero-left, .hero-right {
  z-index: 200;
}


.icon {
  width: 100%;
  clip-path: circle();
  /* box-shadow: var(--shadow-small) */
  margin: 0 auto;
  text-align: center;
  background: transparent;
  position: absolute;
  bottom: 5%;
  
}
.icon svg {
  font-size: 48px;
  color: #A497A6;
  padding: 5px;
  cursor: pointer;
   animation: scrollDown 1.2s ease infinite;
  
}

@-webkit-keyframes scrollDown {
  0%,
  20%,
  50%,
  80%,
  100% {
    -webkit-transform: translateY(0);
    transform: translateX(0);
  }
  40% {
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  60% {
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}

@-moz-keyframes scrollDown {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}

@keyframes scrollDown {
  0%,
  20%,
  50%,
  80%,
  100% {
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -ms-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  60% {
    -ms-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}

/* @keyframes scrollDown1{
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
} */

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

  .hero-right {
    position: absolute;
    z-index: 10;
    opacity: 0.6;
  }

  .hero h2 {
  font-size: 40px;
}

@media (max-width: 450px) {
  .hero-buttons {
    flex-direction: column;
  }
}

/* @media (max-width: 600px) {
  .hero {
     background: url(../../assets/hero10.jpg);
     background-size: cover;
     background-repeat: no-repeat;
  }

  .hero-right {
    display: none;
  }
} */
}


</style>