<script setup lang="ts">
import { onMounted, ref } from "vue";

const config = useRuntimeConfig();
const result = ref<string>();
const error = ref<string>();

onMounted(async () => {
	try {
		const response = await fetch(`${config.public.apiBase}/hello-world`);
		if (!response.ok) {
			throw new Error(`Request failed with status ${response.status}`);
		}

		const payload = await response.json();
		result.value = payload.service;
	} catch (requestError) {
		error.value = requestError instanceof Error ? requestError.message : "Request failed";
	}
});
</script>

<template>
	<main class="container">
		<h2>About with API Call</h2>
		<p v-if="result">API Call: {{ result }}</p>
		<p v-else-if="error">{{ error }}</p>
		<p v-else>Loading...</p>
	</main>
</template>
