<script setup lang="ts">
const { user, logout } = useAuth();

const handleLogout = async () => {
	await logout();
	await navigateTo("/auth/login");
};
</script>

<template>
	<nav>
		<ul class="header-navigation">
			<template v-if="user">
				<li><NuxtLink to="/dashboard" title="Dashboard">Dashboard</NuxtLink></li>
				<li>
					<button type="button" class="nav-link-button" @click="handleLogout">
						Logout
					</button>
				</li>
			</template>
			<template v-else>
				<li><NuxtLink to="/auth/register" title="Registrieren">Registrieren</NuxtLink></li>
				<li><NuxtLink to="/auth/login" title="Login">Login</NuxtLink></li>
			</template>
		</ul>
	</nav>
</template>
<style scoped>
.header-navigation {
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	gap: 1rem;
	margin-top: 0.5rem;
	list-style: none;
}

.header-navigation li a {
	text-decoration: none;
	color: var(--fivteen);
	font-weight: normal;
	font-size: 1.25rem;
	transition: all 0.3s ease-in-out;
}

.header-navigation li a:link,
.header-navigation li a:visited {
	color: var(--secondary);
}
.header-navigation li a:hover,
.header-navigation li a:focus {
	color: var(--primary);
	text-decoration: underline;
}

.nav-link-button {
	background: none;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	color: var(--secondary);
	font-size: 1.25rem;
}

.nav-link-button:hover,
.nav-link-button:focus {
	color: var(--primary);
	text-decoration: underline;
}
</style>
