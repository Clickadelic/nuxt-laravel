<script setup lang="ts">
import AppNavigation from './AppNavigation.vue';

// console.log("App Header component loaded");
</script>

<template>
	<div class="wrap-header">
		<header class="header">
			<AppLogo />
			<AppNavigation />
		</header>
		<HeroSection />
	</div>
</template>

<style scoped>
.wrap-header {
	background-color: var(--thirtyfour);
	min-height: calc(80vh - 5rem);
	padding-top: 2rem;
	background: linear-gradient(var(--gradient-first), var(--gradient-second));
	border-bottom: 2px solid var(--highlight);
}

.header {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 1rem 2rem;
	width: 1440px;
	margin: 0 auto 5rem auto;
	background: var(--white);
	border-radius: 4rem;
	box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
}



@media (max-width: 1280px) {
	.header {
		width: 100%;
	}
}
</style>
