<template>
	<div class="wrap-logo">
		<h1 class="logo"><NuxtLink to="/">DemoProjekt</NuxtLink></h1>
	</div>
</template>

<style scoped>
.wrap-logo {
	display: flex;
	justify-content: center;
}
a:link,
a:visited {
	font-weight: normal;
	font-size: 2rem;
	color: var(--primary);
	font-style: italic;
	text-decoration: none;
}

a:hover,
a:active {
	text-decoration: underline;
}
</style>
