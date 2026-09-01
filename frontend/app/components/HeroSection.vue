<template>
	<section class="hero-section">
		<h2>Die beste Art Software zu nutzen ist, wenn Sie Dir gehört.</h2>
		<Icon name="gitis-icon:developer-activity-bro.svg" size="24px" />
		<NuxtLink class="btn btn-primary" to="/">Angebot anfordern</NuxtLink>
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
</style>
