<template>
	<nav>
		<ul class="header-navigation">
			<li><NuxtLink to="/auth/register" title="Registrieren">Registrieren</NuxtLink></li>
			<li><NuxtLink to="/auth/login" title="Login">Login</NuxtLink></li>
		</ul>
	</nav>
</template>
<style scoped>
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
	color: var(--secondary);
}
.header-navigation li a:hover,
.header-navigation li a:focus {
	color: var(--primary);
	text-decoration: underline;
}
</style>