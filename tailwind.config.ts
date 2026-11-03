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
        brand: {
          blue: "#01557b",
          "blue-deep": "#000000",
          "blue-light": "#ccd1d4",
          graphite: "#4f565e",
          silver: "#ccd1d4",
          black: "#000000",
          white: "#ffffff",
          canvas: "#ffffff",
          border: "#ccd1d4",
          error: "#000000",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Manrope", "Arial", "sans-serif"],
        mono: ["var(--font-dm-mono)", "DM Mono", "monospace"],
        display: ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
      },
      fontSize: {
        "hero-title": "clamp(56px, 7vw, 112px)",
        "section-title": "clamp(43px, 4.7vw, 72px)",
      },
      spacing: {
        "page-gutter": "clamp(22px, 5vw, 84px)",
      },
      backdropBlur: {
        "14": "14px",
      },
    },
  },
  plugins: [],
};

export default config;
