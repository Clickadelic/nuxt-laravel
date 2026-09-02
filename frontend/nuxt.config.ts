// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true, vscode: {} },

	runtimeConfig: {
		public: {
			apiBase: process.env.NUXT_PUBLIC_API_BASE
		}
	},

	css: ["~/assets/css/style.css", "~/assets/css/google-fonts.css", "~/assets/css/gitis-colors.css"],
	modules: ["@nuxt/icon"],
	icon: {
		customCollections: [
			{
				prefix: "gitis-icon", // Code-Prefix for Icons
				dir: "./app/assets/images/svg" // path to folder (since V4 [app directory introduced])
			}
		]
	},
	vite: {
		server: {
			watch: {
				usePolling: true,
				interval: 100
			}
		}
	}
});
