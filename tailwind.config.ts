import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        /** Matches homepage hero / section teal (#0f8f81) — use for informational accents, not primary CTAs */
        teal: {
          50: "#ecf8f6",
          100: "#d4f0ec",
          200: "#a8e0d8",
          300: "#7bc9be",
          400: "#4ba89a",
          500: "#1a9d8c",
          600: "#0f8f81",
          700: "#0c7267",
          800: "#0a5c54",
          900: "#084a44"
        },
        /** Primary action buttons (same as ButtonLink primary on marketing pages) */
        cta: {
          DEFAULT: "#f97316",
          dark: "#ea580c"
        },
        brand: {
          50: "#f1f8f4",
          100: "#e3f0e8",
          200: "#c7e0d1",
          300: "#9cc6af",
          400: "#69a17f",
          500: "#468864",
          600: "#2f7a57",
          700: "#276649"
        },
        accent: {
          50: "#f7f4f0",
          100: "#efe9e2",
          200: "#e4d9cd",
          300: "#d3c1af",
          400: "#b59b84",
          500: "#907c6b",
          600: "#6a665f"
        },
        ink: {
          50: "#ffffff",
          100: "#f5f2ee",
          200: "#e8e2da",
          300: "#d6cec4",
          400: "#a1988e",
          500: "#6a665f",
          600: "#545049",
          700: "#403c36",
          800: "#2f2d2a",
          900: "#2a2a2a"
        }
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 60px -34px rgba(59, 47, 38, 0.14)"
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem"
      }
    }
  },
  plugins: []
};

export default config;
