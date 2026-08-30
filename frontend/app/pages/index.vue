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
	<section>
		<h1>Hello Gitis</h1>
		<h2>{{ config.public.apiBase }}</h2>
		<p v-if="result">{{ result }}</p>
		<p v-else-if="error">{{ error }}</p>
		<p v-else>Loading...</p>
	</section>
</template>
