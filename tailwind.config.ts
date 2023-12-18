import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        disabled: "rgb(var(--c-mercury) / <alpha-value>)",
        contrast: "rgb(var(--cod-gray) / <alpha-value>)",
        primary: "rgb(var(--c-persian-blue) / <alpha-value>)",
        action: "rgb(var(--c-buttercup) / <alpha-value>)",
      },
    },
  },
  darkMode: "class",
  plugins: [require("tw-elements/dist/plugin.cjs")],
};
export default config;
