<script setup lang="ts">
definePageMeta({
	layout: "auth",
	guestOnly: true,
	authTitle: "Passwort Reset",
	authSubtitle: "Passiert jedem von uns"
});
</script>
<template>
	<form>
		<input type="email" placeholder="E-Mail" />
		<button type="submit">Passwort zurücksetzen</button>
	</form>
	<p>Passwort doch nicht vergessen?<NuxtLink to="/auth/login">zurück zum Login</NuxtLink></p>
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

a:link,
a:visited {
	color: var(--primary);
}
a:hover,
a:focus {
	text-decoration: underline;
	color: var(--secondary);
}

p.small {
	font-size: 0.7rem;
}
</style>
