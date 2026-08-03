// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/components/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       colors: {
//         accent: {
//           50: '#fef7ee',
//           100: '#fdedd6',
//           200: '#fad6ad',
//           300: '#f6b87a',
//           400: '#f19245',
//           500: '#ed751f',
//           600: '#e05c13',
//           700: '#b84410',
//           800: '#933813',
//           900: '#773014',
//           950: '#3f1508',
//         },
//         neutral: {
//           50: '#fafafa',
//           100: '#f5f5f5',
//           200: '#e5e5e5',
//           300: '#d4d4d4',
//           400: '#a3a3a3',
//           500: '#737373',
//           600: '#525252',
//           700: '#404040',
//           800: '#262626',
//           900: '#171717',
//           950: '#0a0a0a',
//         },
//       },
//       fontFamily: {
//         sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
//       },
//       borderRadius: {
//         'xl': '1rem',
//         '2xl': '1.5rem',
//       },
//       boxShadow: {
//         'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
//         'card': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
//       },
//     },
//   },
//   plugins: [],
// }
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
        accent: {
          50: "#fef7ee",
          100: "#fdedd6",
          200: "#fad6ad",
          300: "#f6b87a",
          400: "#f19245",
          500: "#ed751f",
          600: "#e05c13",
          700: "#b84410",
          800: "#933813",
          900: "#773014",
          950: "#3f1508",
        },
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0a0a0a",
        },
      },
      fontFamily: {
        sans: [
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
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
        card: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};