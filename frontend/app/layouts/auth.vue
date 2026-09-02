<script setup lang="ts">
const route = useRoute();

const title = computed(() => route.meta.authTitle as string);
const subtitle = computed(() => route.meta.authSubtitle as string);
</script>

<template>
	<div class="auth-layout">
		<section class="auth-section">
			<div class="auth-header">
				<AppLogo />

				<h3>{{ title }}</h3>
				<h4>{{ subtitle }}</h4>
			</div>

			<slot />
		</section>
	</div>
</template>

<style scoped>
.auth-layout {
	min-height: 100vh;
	display: flex;
	background: var(--gray-light);
	background: linear-gradient(180deg, var(--gradient-first) 0%, var(--gradient-second) 100%);
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.auth-section {
	max-width: 400px;
	min-width: 260px;
	background: var(--white);
	padding: 2rem;
	border-radius: 1rem;
	text-align: center;
	display: flex;
	flex-direction: column;
	box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
	width: 100%;
}

.auth-header {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	margin-bottom: 2rem;
}

.auth-header h3 {
	font-size: 1.25rem;
	font-weight: normal;
	color: var(--primary);
}

.auth-header h4 {
	font-size: 1rem;
	color: var(--gray);
}
</style>
