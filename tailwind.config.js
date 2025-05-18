import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        roboto: ["var(--font-roboto)", "sans-serif"],
        playpen: ["var(--font-playpen)", "sans-serif"],
        siliguri: ["var(--font-hind-siliguri)", "sans-serif"],
        atma: ["var(--font-atma)", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
