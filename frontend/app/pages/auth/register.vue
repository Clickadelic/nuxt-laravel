<script setup lang="ts">
definePageMeta({
	layout: "auth",
	authTitle: "Erstelle einen Account",
	authSubtitle: "Registrieren"
});
</script>
<template>
	<form>
		<input type="email" placeholder="E-Mail" />
		<input type="password" placeholder="Passwort" />
		<button type="submit">Registrieren</button>
	</form>
	<p>Du bist bereits registriert? <NuxtLink to="/auth/login">Einloggen</NuxtLink></p>
	<p class="small"><NuxtLink to="/auth/reset-password">Passwort zurücksetzen</NuxtLink></p>
</template>
<style scoped>
/* Placeholder styles */
form {
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-bottom: 1rem;
}

button {
	padding: 0.5rem;
	font-size: 1rem;
	background-color: var(--primary);
	color: var(--white);
	border: none;
	border-radius: 4px;
	cursor: pointer;
}

p {
	color: var(--gray);
}

p:first-of-type {
	margin-bottom: 1rem;
}

p.small a:link,
p.small a:visited {
	font-size: 0.75rem;
	color: var(--primary);
}
</style>
