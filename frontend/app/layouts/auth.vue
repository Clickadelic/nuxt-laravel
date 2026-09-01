<template>
	<div class="auth-layout">
		<slot />
	</div>
</template>
<style scoped>
body {
	min-height: 100vh;
	padding-top: 2rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	justify-content: center;
	align-items: center;
	background: linear-gradient(var(--gradient-first), var(--gradient-second));
}
</style>
