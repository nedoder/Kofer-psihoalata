<template>
	<header class="header" id="header">
		<nav class="navbar header-container">
			<a href="/" class="brand"><img src="../../assets/logo.png"/></a>
			<div class="menu" id="menu">
				<ul class="menu-list">
					<router-link tag="li" class="menu-link" class-active="is-active" to="/" exact>
						<font-awesome-icon icon="house-chimney-window" />
						<span class="menu-name">Početna</span>
					</router-link>
					<router-link tag="li" class="menu-link" class-active="is-active" to="/#about-us" exact>
						<font-awesome-icon icon="user" />
						<span class="menu-name">O nama</span>
					</router-link>
					<router-link tag="li" class="menu-link" class-active="is-active" to="/education" exact>
						<font-awesome-icon icon="book" />
						<span class="menu-name">Edukacija</span>
					</router-link>
					<router-link tag="li" class="menu-link" class-active="is-active" to="/support" exact>
						<font-awesome-icon icon="headset" />
						<span class="menu-name">Podrška</span>
					</router-link>
					<router-link tag="li" class="menu-link" class-active="is-active" to="/#contact" exact>
						<font-awesome-icon icon="square-envelope" />
						<span class="menu-name">Kontakt</span>
					</router-link>
				</ul>
			</div>
		</nav>
	</header>
</template>

<script>
export default {
	name: 'HeaderComponent',
	created: function() {
		window.addEventListener('scroll',this.scrollFunction);
	},
	methods: {
		scrollFunction() {
			const header = document.getElementById("header");
			const icon = document.getElementById("icon");
			if(window.top.scrollY !== 0) {
				header.style.background = "var(--white)";
				header.style.boxShadow = "var(--shadow-medium)";
				header.style.transition = "all 0.35s ease-in-out";
				header.style.zIndex = "1000"
				icon.style.display = "none"
			} else {
				header.style.background = "transparent"
				header.style.boxShadow = "none"
				icon.style.display = "block"
			}
		}
	}, 
}
</script>

<style>

.header-container {
	height: auto;
	margin: 0 auto;
}

.brand img {
    height: 8rem;
}

.header {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: auto;
	z-index: 100;
	padding: 1rem 0;
}

.navbar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 90%;
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
	background: var(--white);
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
	color: var(--black);
}

.menu-link:hover {
	position: relative;
	color: var(--pink);
	transition: all 0.35s ease;
	cursor: pointer;
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

.exact-active {
	position: relative;
	color: var(--pink);
	transition: all 0.35s ease;
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
		background: var(--pink);
	}

	.menu-link:hover {
		color: var(--pink);
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