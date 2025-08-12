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

  //  Thêm cấu hình API backend PHP
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || "http://localhost/api",
    },
  },

  app: {
    head: {
      title: "Summer 2025 | Hï Ibiza | Club with us | Hï Ibiza",
      meta: [
        {
          name: "description",
          content:
            "Officially the World's #1 Club, Hï Ibiza is a 360 nightlife experience featuring the world's best DJs, incredible production, plus so much more.",
        },
      ],
    },
  },
});
