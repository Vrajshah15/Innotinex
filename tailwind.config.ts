import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#0F2C59",
          text: "#0F172A",
        },
        secondary: {
          text: "#334155",
        },
        accent: {
          DEFAULT: "#00D2FF",
          hover: "#00A8CC",
        },
        surface: {
          DEFAULT: "#F8FAFC",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-plus-jakarta)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
