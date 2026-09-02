<script setup lang="ts">
const { user, logout } = useAuth();

const handleLogout = async () => {
	await logout();
	await navigateTo("/auth/login");
};
</script>

<template>
	<div class="dashboard-layout">
		<aside class="dashboard-sidebar">
			<h2>Sidebar</h2>
		</aside>
		<header class="dashboard-header">
			<AppLogo />

			<div class="dashboard-header-actions">
				<!-- Client-only: user's name is never known during SSR (see AppNavigation.vue). -->
				<ClientOnly>
					<span v-if="user" class="dashboard-user">{{ user.name }}</span>
				</ClientOnly>
				<button type="button" class="logout-button" @click="handleLogout">Logout</button>
			</div>
		</header>

		<slot />
	</div>
</template>

<style scoped>
.dashboard-sidebar {
	position: absolute;
	top: 0;
	left: 0;
	height: 100vh;
	width: 64rem;
	background-color: var(--gray-light);
}

.dashboard-header {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 2rem;
}

.dashboard-header-actions {
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 1rem;
}

.dashboard-user {
	color: var(--gray);
}

.logout-button {
	padding: 0.5rem 1rem;
	font-size: 1rem;
	background-color: var(--primary);
	color: var(--white);
	border: none;
	border-radius: 4px;
	cursor: pointer;
}
</style>
