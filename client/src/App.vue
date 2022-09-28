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

:root {
  --white: #fff;
  --black: #000;
  --gradient: linear-gradient(to right, #C4CBC5, #A497A6);
  --light-grey: #c4cbc5;
  --violet: #7e7e92;
  --pink: #D499AE;
  --light-pink: #c57d96;
  --dark-pink: #AD5270;
  --dark-violet: #A497A6;
  --light-black: #444;
  --yellow: #f4cb82;
  --green: #789C91;
  --light-green: hsl(162, 88%, 30%);
  --category-shadow: 0.2rem 0.2rem 0.5rem #c57d96, -0.2rem -0.2rem 0.5rem #dab2c0;;
  --category-shadow-inset: inset 0.2rem 0.2rem 0.5rem #c57d96, inset -0.2rem -0.2rem 0.4rem #dab2c0;
  --shadow-small: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-medium: 0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-large: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
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
	font-family: 'Poppins', sans-serif;
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
	font-family: 'Poppins', sans-serif;
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

</style>