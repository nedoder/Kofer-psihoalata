<template>
    <div class="hero" id="home">
      <div class="hero-shapes" id="home">
        <div class="logo"><img src="../../assets/logo.png" alt="Logo"/></div>
        <div class="shape-blob"></div>
        <div class="shape-blob one"></div>
        <div class="shape-blob two"></div>
        <div class="shape-blob three"></div>
        <div class="shape-blob four"></div>
        <div class="shape-blob five"></div>
        <div class="shape-blob six"></div>
        <div class="hero-image">
            <h3>Coming soon!</h3>
            <img src="../../assets/coming-soon.webp" alt="Coming soon image">
        </div>
      </div>
    </div>
</template>

<style scoped>
.hero {
  width: 100%;
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

.hero-shapes {
    width: 100%;
}

.hero-image {
    width: 100%;
    margin: 0 auto;
    text-align: center;
    z-index: 100;
    padding-top: 5rem;
}

.hero-image h3 {
  padding: 2rem 0;
}

.logo {
    position: absolute;
    left: 0;
    top: 0;
}

.logo img {
    height: 10rem;
    padding: 1rem;
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


.hero h3 {
	letter-spacing: 0.1rem;
	font-weight: 900;
	line-height: 3rem;
	position: relative;
}

/* MEDIA QUERIES */

@media (max-width: 768px) {

  .shape-blob.three, .shape-blob.five, .shape-blob.six {
    display: none;
  }

}

</style>