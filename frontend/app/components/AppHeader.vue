<script setup lang="ts">
// console.log("App Header component loaded");
</script>

<template>
	<div class="wrap-header">
		<header class="header">
			<AppLogo />
			<nav>
				<ul class="header-navigation">
					<li><NuxtLink to="/auth/register" title="Registrieren">Registrieren</NuxtLink></li>
					<li><NuxtLink to="/auth/login" title="Login">Login</NuxtLink></li>
				</ul>
			</nav>
		</header>
		<HeroSection />
	</div>
</template>

<style scoped>
.wrap-header {
	background-color: var(--thirtyfour);
	min-height: 100vh;
	padding-top: 2rem;
	background: linear-gradient(var(--gradient-first), var(--gradient-second));
}

.header {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 1rem 2rem;
	width: 1440px;
	margin: 0 auto 2rem auto;
	background: var(--white);
	border-radius: 4rem;
	box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
}

.header-navigation {
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	gap: 1rem;
	margin-top: 0.5rem;
	list-style: none;
}

.header-navigation li a {
	text-decoration: none;
	color: var(--fivteen);
	font-weight: normal;
	font-size: 1.25rem;
	transition: all 0.3s ease-in-out;
}

.header-navigation li a:link,
.header-navigation li a:visited {
	color: var(--gradient-first);
}
.header-navigation li a:hover,
.header-navigation li a:focus {
	color: var(--gradient-second);
}

@media (max-width: 1280px) {
	.header {
		width: 100%;
	}
}
</style>
