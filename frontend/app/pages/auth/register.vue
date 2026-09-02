<script setup lang="ts">
definePageMeta({
	layout: "auth",
	guestOnly: true,
	authTitle: "Erstelle einen Account",
	authSubtitle: "Registrieren"
});

const { register: registerUser } = useAuth();

const username = ref("");
const email = ref("");
const password = ref("");
const passwordConfirmation = ref("");

const loading = ref(false);
const errorMessage = ref("");
const errors = ref<Record<string, string[]>>({});

const register = async () => {
	loading.value = true;
	errorMessage.value = "";
	errors.value = {};

	try {
		/*
		 * Benutzer registrieren.
		 */
		await registerUser({
			name: username.value,
			email: email.value,
			password: password.value,
			password_confirmation: passwordConfirmation.value
		});

		/*
		 * Nach erfolgreicher Registrierung weiterleiten.
		 */
		await navigateTo("/dashboard");
	} catch (error: any) {
		console.error(error);

		if (error?.status === 422) {
			errors.value = error.data?.errors ?? {};
			errorMessage.value = "Bitte überprüfe deine Eingaben.";
		} else {
			errorMessage.value =
				error?.data?.message ??
				"Die Registrierung ist fehlgeschlagen. Bitte versuche es erneut.";
		}
	} finally {
		loading.value = false;
	}
};
</script>

<template>
	<form @submit.prevent="register">
		<p v-if="errorMessage" class="error-message">
			{{ errorMessage }}
		</p>

	<div class="form-group">
		<input
			v-model="username"
			type="text"
			name="name"
			placeholder="Benutzername"
			autocomplete="name"
			required
		/>

		<p v-if="errors.name" class="field-error">
			{{ errors.name[0] }}
		</p>
	</div>

	<div class="form-group">
		<input
			v-model="email"
			type="email"
			name="email"
			placeholder="E-Mail"
			autocomplete="email"
			required
		/>

		<p v-if="errors.email" class="field-error">
			{{ errors.email[0] }}
		</p>
	</div>

	<div class="form-group">
		<input
			v-model="password"
			type="password"
			name="password"
			placeholder="Passwort"
			autocomplete="new-password"
			required
		/>

		<p v-if="errors.password" class="field-error">
			{{ errors.password[0] }}
		</p>
	</div>

	<div class="form-group">
		<input
			v-model="passwordConfirmation"
			type="password"
			name="password_confirmation"
			placeholder="Passwort wiederholen"
			autocomplete="new-password"
			required
		/>
	</div>

	<button type="submit" :disabled="loading">
		{{ loading ? "Registrierung läuft..." : "Registrieren" }}
	</button>
</form>

<p>
	Du bist bereits registriert?
	<NuxtLink to="/auth/login">Einloggen</NuxtLink>
</p>

<p class="small">
	<NuxtLink to="/auth/reset-password">
		Passwort zurücksetzen
	</NuxtLink>
</p>


</template>

<style scoped>
form {
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-bottom: 1rem;
}

.form-group {
	display: flex;
	flex-direction: column;
	margin-bottom: 1rem;
}

input {
	padding: 0.5rem;
	font-size: 1rem;
	border: 1px solid var(--gray);
	border-radius: 4px;
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

button:disabled {
	cursor: not-allowed;
	opacity: 0.6;
}

p {
	color: var(--gray);
}

p:first-of-type {
	margin-bottom: 1rem;
}

.error-message,
.field-error {
	color: #dc3545;
}

.field-error {
	margin-top: 0.25rem;
	margin-bottom: 0;
	font-size: 0.8rem;
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
