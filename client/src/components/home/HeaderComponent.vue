<template>
<header class="header" id="header">
	<nav class="navbar container">
		<a href="/" class="brand"><img src="../../assets/logo.png"/></a>
		<div class="menu" id="menu">
			<ul class="menu-list">
				<li class="menu-item">
					<a href="/" class="menu-link is-active">
						<font-awesome-icon icon="house-chimney-window" />
						<span class="menu-name">Početna</span>
					</a>
				</li>
				<li class="menu-item">
					<a href="/about-us" class="menu-link">
						<font-awesome-icon icon="user" />
						<span class="menu-name">O nama</span>
					</a>
				</li>
				<li class="menu-item">
					<a href="/education" class="menu-link">
						<font-awesome-icon icon="book" />
						<span class="menu-name">Edukacija</span>
					</a>
				</li>
				<li class="menu-item">
					<a href="/support" class="menu-link">
						<font-awesome-icon icon="headset" />
						<span class="menu-name">Podrška</span>
					</a>
				</li>
				<li class="menu-item">
					<a href="#contact" class="menu-link">
						<font-awesome-icon icon="square-envelope" />
						<span class="menu-name">Kontakt</span>
					</a>
				</li>
			</ul>
		</div>
	</nav>
</header>

</template>

<script>
export default {
  name: 'HeaderComponent',
  methods: {
    toggleMenu() {
 const menuLinks = document.querySelectorAll(".menu-link");

menuLinks.forEach((link) => {
	link.addEventListener("click", () => {
		menuLinks.forEach((link) => {
			link.classList.remove("is-active");
		});
		link.classList.add("is-active");
	});
});
    }
 

  }
}
</script>

<style>
:root {
	--color-black: hsl(0, 0%, 10%);
	--color-white: hsl(0, 0%, 100%);
	--color-darken: hsl(0, 0%, 20%);

	--color-teal-100: hsl(160, 85%, 87%);
	--color-teal-200: hsl(162, 78%, 77%);
	--color-teal-300: hsl(162, 72%, 65%);
	--color-teal-400: hsl(162, 68%, 54%);
	--color-teal-500: hsl(162, 73%, 46%);
	--color-teal-600: hsl(162, 82%, 40%);
	--color-teal-700: hsl(162, 87%, 35%);
	--color-teal-800: hsl(162, 88%, 30%);
    --color-teal-800: #518D70; 
	--color-teal-900: hsl(162, 88%, 26%);

	--shadow-small: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
	--shadow-medium: 0 -4px 6px -1px rgba(0, 0, 0, 0.1),
		0 2px 4px -1px rgba(0, 0, 0, 0.06);
	--shadow-large: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
		0 4px 6px -2px rgba(0, 0, 0, 0.05);
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
}

html {
	font-size: 100%;
	box-sizing: inherit;
	scroll-behavior: smooth;
}

body {
	font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
	font-size: 1rem;
	font-weight: 400;
	line-height: 1.5;
	color: var(--color-black);
	background: var(--color-white);
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

img,
video {
	display: block;
	max-width: 100%;
	height: auto;
	object-fit: cover;
}




.container {
	max-width: 75rem;
	height: auto;
	margin: 0 auto;
	padding: 0 1.25rem;
}

.brand {
	font-family: inherit;
	font-size: 1.35rem;
	font-weight: 700;
	line-height: 1.15;
	color: var(--color-teal-800);
	text-transform: uppercase;
}

.brand img {
    height: 120px;
}

.header {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: auto;
	z-index: 100;
}

.navbar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 4rem;
	margin: 0 auto;
}

.menu {
	position: fixed;
	left: 0;
	bottom: 0;
	display: grid;
	align-content: center;
	width: 100%;
	height: 3.5rem;
	padding: 0 1rem;
	border-top-left-radius: 1.5rem;
	border-top-right-radius: 1.5rem;
	background: var(--color-white);
		box-shadow: var(--shadow-medium);
}
	.menu-list {
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.menu-link {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border: none;
		outline: none;
		color: var(--color-black);
    }
		.menu .is-active {
			position: relative;
			color: var(--color-teal-800);
			transition: all 0.35s ease;
		}
	

	.menu-icon {
		font-size: 1.35rem;
		line-height: 1;
		color: inherit;
	}

	.menu-name {
        white-space: nowrap;
		display: none;
		font-family: inherit;
		font-size: 0.75rem;
		font-weight: 500;
		line-height: 1.25;
		visibility: hidden;
		text-transform: capitalize;
	}



@media  (min-width: 360px) {
	.menu-name {
		
			display: block;
			visibility: visible;
		
	}
}

@media (min-width: 576px) {
	.menu-list {
	
			justify-content: center;
		column-gap: 3rem;
		
	}
}

@media (min-width: 768px) {
	.header {
		background: var(--color-white);
		box-shadow: var(--shadow-medium);
		transition: all 0.35s ease-in-out;
	}

	.menu {
		position: relative;
		top: 0;
		right: 0;
		width: auto;
		height: auto;
		background: none;
		box-shadow: none;
    }

		.menu-link .is-active::before {
			
				position: absolute;
				content: "";
				left: 0;
				bottom: 0;
				width: 2rem;
				height: 2px;
				border: none;
				outline: none;
				background: var(--color-teal-800);
			}

			.menu-link:hover {
				color: var(--color-teal-800);
				transition: all 0.35s ease;
			}
		

		.menu-icon {
			display: none;
			visibility: hidden;
		}

		.menu-name {
			font-size: 1rem;
			font-weight: 500;
			line-height: 1.5;
			margin-bottom: 0.2rem;
		}
	}


</style>