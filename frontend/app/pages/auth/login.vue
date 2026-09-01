<script setup lang="ts">
definePageMeta({
	layout: "auth",
	authTitle: "Willkommen zurück",
	authSubtitle: "Login"
});
</script>
<template>
	<form>
		<input type="email" placeholder="E-Mail" />
		<input type="password" placeholder="Passwort" />
		<button type="submit">Login</button>
	</form>
	<p>Du hast noch keinen Account? <NuxtLink to="/auth/register">Registrieren</NuxtLink></p>
	<p class="small"><NuxtLink to="/auth/reset-password">Passwort zurücksetzen</NuxtLink></p>
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

p.small {
	font-size: 0.7rem;
}
</style>
