<script setup lang="ts">
definePageMeta({
	layout: "auth"
});
</script>
<template>
	<section class="auth-section">
		<div class="auth-header">
			<AppLogo />
			<h3>Login</h3>
		</div>
		<form>
			<input type="text" placeholder="Username" />
			<input type="password" placeholder="Password" />
			<button type="submit">Login</button>
		</form>
	</section>
</template>
<style>
.auth-section {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 2rem;
	background: var(--white);
	border-radius: 0.5rem;
}

.auth-header {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5rem;
}

h3 {
	font-size: 1.25rem;
	font-weight: normal;
	text-align: center;
	color: var(--gray);
}

form {
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	max-width: 400px;
	margin: 0 auto;
}

input {
	border-radius: 0.25rem;
	font-size: 1.25rem;
	border: 1px solid var(--gradient-first);
	padding: 0.5rem 1rem;
}

input:focus {
	outline: none;
	border-color: var(--accent-first);
	box-shadow: 0 0 0 2px var(--accent-second);
}

button {
	border-radius: 0.25rem;
	border: 0;
	font-size: 1.25rem;
	background-color: var(--gradient-first);
	color: var(--white);
	padding: 0.5rem 1rem;
	cursor: pointer;
}
</style>
