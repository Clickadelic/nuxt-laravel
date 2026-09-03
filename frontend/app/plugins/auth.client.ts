export default defineNuxtPlugin(async () => {
	const route = useRoute();

	/*
	 * Guest-only pages (login/register/reset-password) are only ever shown
	 * to logged-out visitors and don't render any auth-aware UI, so the
	 * proactive session check is skipped there. This avoids an expected but
	 * noisy 401 for GET /api/user showing up in the browser console every
	 * time one of these pages loads.
	 */
	if (route.meta.guestOnly) {
		return;
	}

	const { fetchUser } = useAuth();

	/*
	 * Silently check whether a Sanctum session cookie is already present
	 * so that the nav / dashboard reflect the correct auth state on load.
	 */
	await fetchUser();
});
