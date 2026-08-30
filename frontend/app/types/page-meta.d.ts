import type { definePageMeta as defineNuxtPageMeta } from "nuxt/dist/pages/runtime";

declare global {
	const definePageMeta: typeof defineNuxtPageMeta;
}

export {};
