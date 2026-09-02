export default defineNuxtRouteMiddleware(async () => {
	/*
	 * Auth state is only reliably known on the client (session cookie),
	 * so skip the check during SSR and let the client plugin/middleware
	 * pass handle it after hydration.
	 */
	if (import.meta.server) {
		return;
	}

	const { user, fetchUser } = useAuth();

	if (!user.value) {
		await fetchUser();
	}

	if (!user.value) {
		return navigateTo("/auth/login");
	}
});
