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
        <h2>Pakujemo kofer mentalnog zdravlja</h2>
        <p>U njemu ćete pronaći alat podrške i edukacije za mlade, pregradu u kojoj oni mogu da se angažuju i komuniciraju o 
          njima važnim temama u oblasti mentaln higijene, brižljivo složene relevantne informacije iz oblasti mentalnog zdravlja.
        </p>
        <div class="hero-buttons">
          <a href="/join-us" aria-label="Join us">Postani volonter</a>
           <a href="https://www.patreon.com/nvoportret" aria-label="Patreon">Podrži nas</a>
        </div>
      </div>
      <div class="hero-right">
        <img src="../../assets/hero.webp" class="hero-desktop" alt="Hero image">
        <img src="../../assets/hero-mobile.webp" class="hero-mobile" alt="Hero image">
      </div>
    </div>
    <div class="icon" id="icon" v-if="visible">
      <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><path d="m8.5.5-4 4-4-4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(6 8)"/></svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroSection',
  data: () => ({
    visible: true,
  }),
  created: function() {
		window.addEventListener('scroll',this.scrollFunction);
	},
  methods: {
		scrollFunction() {
			if(window.top.scrollY === 0) {
        this.visible = true;
			} else {
        this.visible = false;
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
	opacity:.5;
	position: absolute;
	right: 0%;
	bottom: 10%;
  z-index: 0;
  transform: rotate(-180deg);
	animation: transform 30s ease-in-out infinite both alternate, movement_two 60s ease-in-out infinite both;
}

.shape-blob.one{
	left: -5%;
	top: 50%;
}

.shape-blob.two{
	left: 15%;
	top: -50px;
}

.shape-blob.three{
	right: 10%;
	top: -50px;
}

.shape-blob.four{
	left: 20%;
	bottom: -5%;
}

.shape-blob.five{
	left: 30%;
	bottom: 30%;
}

.shape-blob.six{
	left: 60%;
	bottom: 60%;
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

@keyframes movement_two
{
  0%,
  500% { transform: none; }
  50% { transform: translate(50%, 20%) rotate(-200deg) scale(1.2);}
}

/* HERO COMPONENT */
.hero h2 {
  font-size: 3rem;
	letter-spacing: 0.1rem;
  color: var(--violet);
	line-height: 5rem;
	position: relative;
}

.hero-buttons {
  padding-top: 0.8rem;
  display: flex;
  row-gap: 1rem;
  column-gap: 1rem;
  text-align: center;
 
}

.hero-buttons a {
  color: var(--black);
  width: 11rem;
  position: relative;
  border-radius: 1rem;
  padding: .8rem .2rem;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  backdrop-filter: blur(.5rem);
  transition: all .5s ease;
  border: 4px solid transparent;
  border-image: var(--gradient);
  border-image-slice: 1;
  transition: all .2s cubic-bezier(.86,0,.07,1);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  color: var(--dark-violet);
  font-weight: 600;
  text-transform: uppercase;
  font-size: .75rem;
}

/* HERO BUTTONS HOVER ANIMATION */
@keyframes animation {
  20% {
    clip-path: polygon(1% 1%, 100% 0, 100% 100%, 0 100%)
  }
    
  40% {
    clip-path: polygon(0 0, 95% 1%, 100% 100%, 0 100%)
  }
    
  60% {
    clip-path: polygon(0 0, 100% 0, 95% 95%, 0 100%)
  }
    
  80% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 1% 95%)
  }
    
  from, to {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%)
  }
   
}

.hero-buttons a:hover {
  animation: animation .5s ease-in-out .2s;
  letter-spacing: .1rem;
}

.hero-left p {
  padding: 0.5rem 0;
  color: var(--black);
  text-align: justify;
}

.hero-left, .hero-right {
  z-index: 200;
}

.hero-right img {
  padding-left: 3rem;
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
  color: var(--violet);
  padding: 5px;
  cursor: pointer;
  animation: scrollDown 1.2s ease infinite;
  width: 5rem;
  height: 5rem;
}

/* SCROLL DOWN ANIMATION */
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

@media (min-width: 1200px) {
  img.hero-mobile {
    display: none;
  }
}

@media (max-width: 1200px) {
  img.hero-desktop {
    display: none;
  }
}

@media (max-width: 850px) {
  .hero-right {
    display: none;
  }
}


@media (max-width: 768px) {
  .shape-blob.three, .shape-blob.five, .shape-blob.six {
    display: none;
  }
  
  .hero h2 {
    font-size: 3rem;
  }

}

@media (max-width: 500px) {
  .hero h2 {
    font-size: 2.5rem;
    line-height: 3.5rem;
  }
  .hero-buttons a {
    width: 9rem;
  }
}

@media (max-width: 450px) {
  .hero h2 {
    font-size: 2rem;
    line-height: 3rem;
  }
}

@media (max-width: 400px) {
  .hero h2 {
    font-size: 1.7rem;
    line-height: 3rem;
  }

  .icon {
    top: 83vh;
  }
}

@media (max-width: 370px) {
  .hero-buttons {
    flex-direction: column;
  }

  .hero-buttons a {
    width: 11rem;
  }
}

@media (max-width: 300px) {
  .hero h2 {
    font-size: 1.3rem;
    line-height: 2rem;
  }
  .hero p {
    font-size: .7rem;
  }

}


@media (max-height: 600px) {
  .hero h2 {
    font-size: 1.7rem;
  }

  .hero-left p {
    padding: 10px 0;
    font-size: .8rem;
  }

}

</style>