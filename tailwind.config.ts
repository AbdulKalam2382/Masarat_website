import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          navy: "#0D1B2A",
          blue: "#1A56DB",
          "blue-2": "#2563EB",
          cyan: "#00B4D8",
          surface: "#F0F4F8",
          muted: "#64748B",
          border: "#E5E5EA",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        outfit: ["var(--font-outfit)"],
        cairo: ["var(--font-cairo)"],
      },
    },
  },
  plugins: [],
};
export default config;
