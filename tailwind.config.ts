import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "#0B8EC4",
          coral: "#FF6B4A",
          orange: "#FF9B3E",
          navy: "#0A3D5C",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        display: ["var(--font-display)"],
      },
    },
  },
  plugins: [],
};
export default config;
