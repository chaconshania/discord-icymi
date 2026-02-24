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
        discord: {
          bg: "#111214",
          "bg-secondary": "#1e1f22",
          "bg-tertiary": "#232428",
          "bg-elevated": "#2b2d31",
          "bg-hover": "#35373c",
          "text-normal": "#dbdee1",
          "text-secondary": "#b5bac1",
          "text-muted": "#80848e",
          brand: "#5865f2",
          "brand-light": "#949cf7",
          green: "#23a55a",
          "interactive-normal": "#b5bac1",
          "interactive-hover": "#dbdee1",
          "interactive-active": "#f2f3f5",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-gg-sans)",
          "gg sans",
          "Noto Sans",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
