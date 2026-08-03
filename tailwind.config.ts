/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "var(--background)",
          soft: "var(--background-soft)",
        },
        surface: {
          DEFAULT: "var(--surface)",
          elevated: "var(--surface-elevated)",
        },
        sage: {
          DEFAULT: "rgb(157, 185, 166)",
          light: "rgba(157, 185, 166, 0.16)",
          dark: "rgb(113, 141, 122)",
          50: "rgba(157, 185, 166, 0.12)",
          100: "rgba(157, 185, 166, 0.12)",
          200: "rgba(157, 185, 166, 0.28)",
          300: "rgba(157, 185, 166, 0.28)",
          500: "rgb(157, 185, 166)",
          600: "rgb(113, 141, 122)",
          700: "rgb(157, 185, 166)",
        },
        terracotta: {
          DEFAULT: "rgb(184, 143, 120)",
          50: "rgba(184, 143, 120, 0.1)",
        },
        cream: {
          DEFAULT: "rgb(229, 222, 210)",
        },
        amber: {
          100: "rgba(229, 222, 210, 0.1)",
          200: "rgba(229, 222, 210, 0.18)",
          700: "var(--accent-cream)",
          800: "var(--accent-cream)",
        },
        charcoal: {
          500: "var(--text-secondary)",
          600: "var(--text-secondary)",
          700: "var(--text-secondary)",
          800: "var(--text-primary)",
          900: "var(--text-primary)",
        },
        warmGrey: {
          50: "rgba(210, 230, 218, 0.05)",
          100: "var(--text-secondary)",
          200: "var(--text-secondary)",
          300: "var(--text-muted)",
          400: "var(--text-muted)",
          500: "var(--text-muted)",
          600: "var(--text-muted)",
        },
        primary: {
          DEFAULT: "var(--text-primary)",
        },
        secondary: {
          DEFAULT: "var(--text-secondary)",
        },
        muted: {
          DEFAULT: "var(--text-muted)",
        },
      },
      borderColor: {
        soft: "var(--border-soft)",
        strong: "var(--border-strong)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        card: "0 8px 28px rgba(0, 0, 0, 0.18)",
      },
    },
  },
  plugins: [],
};
