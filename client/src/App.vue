<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App', 
};
</script>

<style>

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

*,
*::before,
*::after {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	list-style: none;
	list-style-type: none;
	text-decoration: none;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-rendering: optimizeLegibility;
	font-family: 'Montserrat Alternates', sans-serif;
}

:root {
  --white: #fff;
  --black: #1C110A;
  --light-black: #333333;
  --grey: #f5f5f5;
  --light-grey: #c4cbc5;
  --yellow: #E9B44C;
  --green: #50A2A7;
  --dark-green: #397B7E;
  --violet: #9A7197;
  --red: #9B2915;
  --beige: #E4D6A7;
  --gradient: linear-gradient(90deg, rgba(245,192,183,1) 0%, rgba(172,213,215,1) 100%);
  --category-shadow: 0.2rem 0.2rem 0.5rem #499397, -0.2rem -0.2rem 0.5rem #59b5b9;
  --category-shadow-inset: 0.2rem 0.2rem 0.5rem #59b5b9, -0.2rem -0.2rem 0.5rem #499397;
  --shadow-small: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-medium: 0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-large: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

@font-face {
  font-family: "Poland";
  src: local("Poland"),   url(./assets/fonts/PolandCanIntoBigWritingsOutline.otf) format("truetype");
}

html {
	font-size: 100%;
	box-sizing: inherit;
	scroll-behavior: smooth;
  position: relative;
  background-image: url("../../client/src/assets/hero.webp");
  background-size: 0;
  
}

body {
	font-family: 'Montserrat Alternates', sans-serif;
	font-size: 1rem;
	font-weight: 400;
	line-height: 1.5;
	color: var(--black);
	background: var(--white);
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: flex-end;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Poland', sans-serif;
}

h3 {
  font-size: 2rem;
  color: var(--light-black);
  padding: 4rem 0 1rem 0;
  text-align: left;
}

h4, h5 {
  font-size: 1.5rem;
}

footer {
  margin: auto 0;
}

a,
button {
	font-family: inherit;
	font-size: inherit;
	line-height: inherit;
	cursor: pointer;
	border: none;
	outline: none;
	background: none;
	text-decoration: none;
}

@media (min-width: 3000px) {
  html {
    font-size: 40px !important;
  }

  .category-list {
    padding: 10rem 1rem;
  }
}

@media (max-width: 768px) {
  h3 {
    font-size: 1.5rem;
    line-height: 2.5rem;
  }
}

</style>