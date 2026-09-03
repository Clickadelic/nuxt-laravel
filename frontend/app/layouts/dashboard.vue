<script setup lang="ts">
const { user, logout } = useAuth();

const handleLogout = async () => {
	await logout();
	await navigateTo("/auth/login");
};

const handleToggle = () => {
	const sidebar = document.querySelector(".dashboard-sidebar") as HTMLElement;
	const content = document.querySelector(".dashboard-content") as HTMLElement;
	const header = document.querySelector(".dashboard-header") as HTMLElement;

	if (sidebar && content && header) {
		sidebar.classList.toggle("collapsed");
		content.classList.toggle("collapsed");
		header.classList.toggle("collapsed");
	}
};
</script>

<template>
	<div class="dashboard-layout">
		<aside class="dashboard-sidebar">
			<AppLogo />
		</aside>
		<header class="dashboard-header">
			<button @click="handleToggle">Toggle Sidebar</button>
			<div class="dashboard-header-actions">
				<!-- Client-only: user's name is never known during SSR (see AppNavigation.vue). -->
				<ClientOnly>
					<span v-if="user" class="dashboard-user">{{ user.name }}</span>
				</ClientOnly>
				<button type="button" class="logout-button" @click="handleLogout">Logout</button>
			</div>
		</header>

		<main class="dashboard-content">
			<slot />
		</main>
	</div>
</template>

<style scoped>
.dashboard-layout {
	margin: 0;
	height: calc(100vh - 4rem);
	background: var(--white);
}

.dashboard-sidebar {
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 16rem;
	padding-top: 1rem;
	background-color: var(--gray-light);
}

.dashboard-header {
	position: fixed;
	top: 0;
	left: 16rem;
	width: calc(100vw - 16rem);
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 2rem;
	background-color: var(--gray-light);
}

.dashboard-content {
	margin-left: 16rem;
	margin-top: 4rem;
	padding: 2rem;
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

.dashboard-sidebar.collapsed {
	width: 4rem;
}

.dashboard-header.collapsed {
	left: 4rem;
	width: calc(100vw - 4rem);
}

.dashboard-content.collapsed {
	margin-left: 4rem;
}
</style>
