import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Paleta oficial de Patria (ver styles/palette.json). No añadir tonos fuera de esta lista.
      colors: {
        brand: {
          blue: "#01557b",
          graphite: "#4f565e",
          silver: "#ccd1d4",
          black: "#000000",
          white: "#ffffff",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "Arial", "sans-serif"],
        display: ["var(--font-jakarta)", "var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-dm-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "section-title": ["clamp(2.25rem, 4vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
      },
      spacing: {
        "page-gutter": "clamp(22px, 5vw, 84px)",
      },
    },
  },
  plugins: [],
};

export default config;
