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
          <a href="/join-us" aria-label="Join us">Postani volonter</a>
           <a href="https://www.patreon.com/" aria-label="Patreon">Podrži nas</a>
        </div>
      </div>
      <div class="hero-right">
        <img src="../../assets/hero.png" alt="Hero image">
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
  created: function() {
		window.addEventListener('scroll',this.scrollFunction);
	},
  methods: {
		scrollFunction() {
			const icon = document.getElementById("icon");
			if(window.top.scrollY !== 0) {
          icon.style.display = "none"
			} else {
          icon.style.display = "block"
			}
		}
	}, 
}
</script>

<style>

/* HERO SECTION */
.hero {
  background: var(--white);
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  padding: 0 calc(5% + 1rem);
}

/* BACKGROUND SHAPES */
.shape-blob {
	background: var(--gradient);
	height: 10rem;
	width: 10rem;
	border-radius: 30% 50% 20% 40%;
  animation: transform 20s ease-in-out infinite both alternate, movement_one 40s ease-in-out infinite both;
	opacity:.5;
	position: absolute;
	right: 0%;
	bottom: 10%;
  z-index: 0;
}

.shape-blob.one{
	left: -5%;
	top: 50%;
	transform: rotate(-180deg);
	animation: transform 30s ease-in-out infinite both alternate, movement_two 60s ease-in-out infinite both;
}

.shape-blob.two{
	left: 15%;
	top: -50px;
	transform: rotate(-180deg);
	animation: transform 30s ease-in-out infinite both alternate, movement_two 60s ease-in-out infinite both;
}

.shape-blob.three{
	right: 10%;
	top: -50px;
	transform: rotate(-180deg);
	animation: transform 30s ease-in-out infinite both alternate, movement_two 60s ease-in-out infinite both;
}

.shape-blob.four{
	left: 20%;
	bottom: -5%;
	transform: rotate(-180deg);
	animation: transform 30s ease-in-out infinite both alternate, movement_two 60s ease-in-out infinite both;
}

.shape-blob.five{
	left: 30%;
	bottom: 30%;
	transform: rotate(-180deg);
	animation: transform 30s ease-in-out infinite both alternate, movement_two 60s ease-in-out infinite both;
}

.shape-blob.six{
	left: 60%;
	bottom: 60%;
	transform: rotate(-180deg);
	animation: transform 30s ease-in-out infinite both alternate, movement_two 60s ease-in-out infinite both;
}

/* BACKGROUND SHAPES ANIMATION */
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
  font-family: 'Ribeye Marrow', cursive;
  font-size: 4rem;
	letter-spacing: 0.1rem;
	font-weight: 900;
	color: #444;
	line-height: 3rem;
	position: relative;
	text-shadow: .2rem .2rem 1rem rgba(0,0,0,.15);
}

.hero-buttons {
  padding-top: 0.8rem;
  display: flex;
  row-gap: 1rem;
  column-gap: 1rem;
  text-align: center;
 
}

.hero-buttons a {
  color: black;
  width: 11rem;
  position: relative;
  border-radius: 1rem;
  padding: .8rem 1.2rem;
  box-shadow:  .1rem .1rem .6rem var(--light-grey), .1rem -.1rem .3rem var(--violet);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  backdrop-filter: blur(.5rem);
  transition: all .5s ease;
  
}

.hero-buttons a:hover {
  box-shadow:  .2rem .2rem .6rem var(--light-grey), .1rem .2rem .4rem var(--violet);
  transform: scale(0.97);
}

.hero-left a:first-child {
  color: var(--white);
  background: var(--pink);
  text-shadow: 0 1.5px 3px var(--black)
}

.hero-left p {
  padding: 20px 0;
  color: var(--black);
  text-align: justify;
}

.hero-left, .hero-right {
  z-index: 200;
}

/* SCROLL DOWN ICON */
.icon {
  width: 100%;
  clip-path: circle();
  margin: 0 auto;
  text-align: center;
  background: transparent;
  position: absolute;
  top: 85vh;
  
}

.icon svg {
  font-size: 3.5rem;
  color: var(--dark-violet);
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

/* MEDIA QUERIES */

@media (max-width: 1200px) {

  .hero h2 {
    font-size: 4.5rem;
  }
}

@media (max-width: 992px) {

  .hero h2 {
    font-size: 4rem;
  }
}

@media (max-width: 768px) {
 
  .hero-right {
    display: none;
  }

  .shape-blob.three, .shape-blob.five, .shape-blob.six {
    display: none;
  }
  
  .hero h2 {
    font-size: 3rem;
  }

}

@media (max-width: 400px) {

  .hero-buttons {
    flex-direction: column;
  }

  .hero h2 {
    font-size: 2rem;
  }

  .icon {
    top: 83vh;
  }
}

@media (max-width: 300px) {
  .hero p {
    font-size: .7rem;
  }

  .hero h2 {
    line-height: 2.5rem;
  }
}


@media (max-height: 600px) {
  .hero h2 {
    font-size: 1.5rem;
  }

  .hero-left p {
    padding: 10px 0;
    font-size: .8rem;
  }

}

</style>