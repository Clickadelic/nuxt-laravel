<template>
	<section class="hero-section">
		<div class="hero-content">
			<h2>Die beste Art Software zu nutzen ist, wenn Sie Dir gehört.</h2>
			<NuxtLink class="btn btn-primary" to="/">Angebot anfordern</NuxtLink>
		</div>
		<img src="~/assets/images/svg/developer-activity-bro.svg" alt="Developer Activity" />
	</section>
</template>

<style scoped>
.hero-section {
	font-size: 2rem;
	color: var(--white);
	max-width: 1440px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 2fr 1fr;
	gap: 2rem;
}

h2 {
	color: var(--white);
	font-size: 52px;
}

.hero-content {
	padding-top: 5rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;
}
</style>
