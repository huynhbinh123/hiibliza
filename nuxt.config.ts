import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  alias: {
    "~/types": "./types",
  },
  modules: ["@nuxt/image", "@nuxt/icon", "@nuxt/ui", "@nuxt/fonts"],
  vite: {
    plugins: [tailwindcss()],
  },
});
