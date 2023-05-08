/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3CB371',
          '2': '#FFC107',
        },
        secondary: '#9C27B0',
        ndark: "#1A2151",
        dark: "#1C2331"
      }
    },
  },
  plugins: [],
}