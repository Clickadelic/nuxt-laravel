export default defineNuxtPlugin(async () => {
	const { fetchUser } = useAuth();

	/*
	 * Silently check whether a Sanctum session cookie is already present
	 * so that the nav / dashboard reflect the correct auth state on load.
	 */
	await fetchUser();
});
