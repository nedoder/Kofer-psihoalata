<template>
	<header class="header" id="header">
		<nav class="navbar header-container">
			<a href="/" class="brand" aria-label="Logo"><img src="../../assets/logo.png" alt="Logo"/></a>
			<div class="menu" id="menu">
				<div class="menu-list">
					<router-link class="menu-link" class-active="is-active"  to="/" @click.native="toTop" exact>
						<svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(1 1)"><path d="m.5 9.5 9-9 9 9"/><path d="m2.5 7.5v8c0 .5522847.44771525 1 1 1h3c.55228475 0 1-.4477153 1-1v-4c0-.5522847.44771525-1 1-1h2c.5522847 0 1 .4477153 1 1v4c0 .5522847.4477153 1 1 1h3c.5522847 0 1-.4477153 1-1v-8"/></g></svg>
						<span class="menu-name">Početna</span>
					</router-link>
					<router-link class="menu-link" class-active="is-active" to="/#about-us" exact>
						<svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><path d="m7.5.5c1.65685425 0 3 1.34314575 3 3v2c0 1.65685425-1.34314575 3-3 3s-3-1.34314575-3-3v-2c0-1.65685425 1.34314575-3 3-3zm7 14v-.7281753c0-3.1864098-3.6862915-5.2718247-7-5.2718247s-7 2.0854149-7 5.2718247v.7281753c0 .5522847.44771525 1 1 1h12c.5522847 0 1-.4477153 1-1z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 2)"/></svg>
						<span class="menu-name">O nama</span>
					</router-link>
					<router-link class="menu-link" class-active="is-active" to="/categories" @click.native="toTop" exact>
						<svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(1 1)"><path d="m8.5 4.5c-1.65685425 0-3 1.34314575-3 3v5c0 1.6568542 1.34314575 3 3 3l2.468-.001 1.7152977 2.4298518c.1639804.2320786.4176379.3818336.6960544.4156462l.1206479.0072945c.5128358 0 .9355072-.3860402.9932723-.8833789l.0067277-.1166211.001-1.8527925.999.001c1.6568542 0 3-1.3431458 3-3v-5c0-1.65685425-1.3431458-3-3-3z"/><path d="m5.5 12.5-2 2v-4h-.90625561c-1.09544195 0-1.98704628-.88123276-1.9998631-1.97659973l-.07020561-6c-.01292361-1.10449389.87196894-2.01033976 1.97646283-2.02326337.00779976-.00009127.01559998-.0001369.02340027-.0001369h8.97646122c1.1045695 0 2 .8954305 2 2v2"/></g></svg>
						<span class="menu-name">Kategorije</span>
					</router-link>
					<router-link class="menu-link" class-active="is-active" to="/support" @click.native="toTop" exact>
						<svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(1 2)"><path d="m16.5 12.5v-10c0-1.1045695-.8954305-2-2-2h-8c-1.1045695 0-2 .8954305-2 2v10c0 1.1045695.8954305 2 2 2h8c1.1045695 0 2-.8954305 2-2z"/><path d="m4.30542777 2.93478874-2.00419132.72946598c-1.03795581.37778502-1.57312998 1.52546972-1.19534496 2.56342553l3.42020143 9.39692625c.37778502 1.0379558 1.52546972 1.5731299 2.56342553 1.1953449l5.56843115-2.1980811"/><path d="m7.5 5.5h5"/><path d="m7.5 7.5h6"/><path d="m7.5 9.5h3"/></g></svg>
						<span class="menu-name">Podrška</span>
					</router-link>
					<router-link class="menu-link" class-active="is-active" to="/contact" @click.native="toTop" exact>
						<svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(3.5 4.5)"><path d="m0 2v8c0 1.1045695.8954305 2 2 2h10c1.1045695 0 2-.8954305 2-2v-8c0-1.1045695-.8954305-2-2-2h-10c-1.1045695 0-2 .8954305-2 2z"/><path d="m2 3 5 3 5-3"/></g></svg>
						<span class="menu-name">Kontakt</span>
					</router-link>
				</div>
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
			if(window.top.scrollY !== 0) {
				header.style.background = "var(--white)";
				header.style.boxShadow = "var(--shadow-medium)";
				header.style.transition = "all 0.35s ease-in-out";
				header.style.zIndex = "1000"
			} else {
				header.style.background = "transparent"
				header.style.boxShadow = "none"
			}
		},
		toTop() {
			window.scrollTo(0,0);
			
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
	padding: .5rem 0;
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
	color: var(--green);
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
	color: var(--dark-green);
	transition: all 0.35s ease;
}

.exact-active svg {
	filter: drop-shadow(0px 0px 6px var(--green));
}

.exact-active  span {
	text-shadow: 0 .5px 1.5px var(--dark-green);
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
		background: var(--green);
	}

	.menu-link:hover {
		color: var(--green);
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