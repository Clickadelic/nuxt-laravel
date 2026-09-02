import type { user as AuthUser } from "../shared/types";

interface RegisterPayload {
	name: string;
	email: string;
	password: string;
	password_confirmation: string;
}

interface LoginPayload {
	email: string;
	password: string;
}

/**
 * Shared Sanctum SPA authentication logic.
 *
 * `user` is a Nuxt `useState` value, so it's shared (and reactive) across
 * every component that calls `useAuth()`.
 */
export const useAuth = () => {
	const config = useRuntimeConfig();
	const user = useState<AuthUser | null>("auth-user", () => null);

	const apiBase = config.public.apiBase as string;
	const rootBase = apiBase.replace(/\/api$/, "");

	/*
	 * Sanctum CSRF-Cookie laden.
	 *
	 * Wichtig:
	 * Dieser Request muss vor jedem POST-Request erfolgen,
	 * wenn du Sanctum mit Cookie-basierter Authentifizierung verwendest.
	 */
	const ensureCsrfCookie = async () => {
		await $fetch("/sanctum/csrf-cookie", {
			baseURL: rootBase,
			credentials: "include"
		});
	};

	/**
	 * Unlike axios, `$fetch`/`ofetch` does not automatically read the
	 * `XSRF-TOKEN` cookie and send it back as the `X-XSRF-TOKEN` header, so
	 * this must be done manually for every state-changing (POST) request,
	 * otherwise Laravel's CSRF middleware rejects the request with a 419.
	 */
	const csrfHeader = (): Record<string, string> => {
		if (import.meta.server) {
			return {};
		}

		const match = document.cookie.match(/(?:^|;\s*)XSRF-TOKEN=([^;]*)/);

		return match ? { "X-XSRF-TOKEN": decodeURIComponent(match[1]) } : {};
	};

	/**
	 * Load the currently authenticated user (if any). Only runs on the
	 * client, since the session cookie is only reliably available there.
	 */
	const fetchUser = async () => {
		if (import.meta.server) {
			return user.value;
		}

		try {
			user.value = await $fetch<AuthUser>("/user", {
				baseURL: apiBase,
				credentials: "include"
			});
		} catch {
			user.value = null;
		}

		return user.value;
	};

	const register = async (payload: RegisterPayload) => {
		await ensureCsrfCookie();

		const response = await $fetch<{ user: AuthUser }>("/register", {
			baseURL: apiBase,
			method: "POST",
			credentials: "include",
			headers: csrfHeader(),
			body: payload
		});

		user.value = response.user;

		return user.value;
	};

	const login = async (payload: LoginPayload) => {
		await ensureCsrfCookie();

		const response = await $fetch<{ user: AuthUser }>("/login", {
			baseURL: apiBase,
			method: "POST",
			credentials: "include",
			headers: csrfHeader(),
			body: payload
		});

		user.value = response.user;

		return user.value;
	};

	const logout = async () => {
		await ensureCsrfCookie();

		await $fetch("/logout", {
			baseURL: apiBase,
			method: "POST",
			credentials: "include",
			headers: csrfHeader()
		});

		user.value = null;
	};

	return {
		user,
		ensureCsrfCookie,
		fetchUser,
		register,
		login,
		logout
	};
};
