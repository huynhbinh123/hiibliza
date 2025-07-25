// tailwind.config.ts
export default {
  content: ["./components/**/*.{vue,js,ts}", "./pages/**/*.{vue,js,ts}"],
  safelist: ["text-9xl", "text-8xl"], // 👈 thêm dòng này
  theme: {
    extend: {},
  },
  plugins: [],
};
