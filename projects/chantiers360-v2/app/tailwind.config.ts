import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#14151f",
          hero: "#1a1b2e",
          card: "#1e2030",
        },
        accent: {
          purple: "#7c5cff",
          blue: "#4f8cff",
          green: "#3ecf8e",
          yellow: "#f5c451",
          orange: "#ff9f43",
          red: "#ff6b6b",
        },
        surface: {
          DEFAULT: "#f5f6f8",
          card: "#ffffff",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(15, 23, 42, 0.06), 0 4px 12px rgba(15, 23, 42, 0.04)",
      },
    },
  },
  plugins: [],
};

export default config;
