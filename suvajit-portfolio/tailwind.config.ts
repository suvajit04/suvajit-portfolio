import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Arial", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      colors: {
        ink: "#080b13",
        panel: "#101625",
        accent: "#8b7cff",
        cyan: "#5ee7f7",
      },
      boxShadow: {
        glow: "0 0 60px rgba(124, 108, 255, .18)",
      },
    },
  },
  plugins: [],
};
export default config;
