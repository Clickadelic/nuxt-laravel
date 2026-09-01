// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },

	runtimeConfig: {
		public: {
			apiBase: process.env.NUXT_PUBLIC_API_BASE
		}
	},

	css: ["~/assets/css/style.css", "~/assets/css/google-fonts.css"],
	modules: ["@nuxt/icon"],
	icon: {
		customCollections: [
			{
				prefix: "gitis-icon", // Das wird dein Präfix im Code
				dir: "./assets/images/svg" // Pfad zu deinem Ordner
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
})
