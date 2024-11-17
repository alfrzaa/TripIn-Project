/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#49abff",
        primary2: "#044379",
        white: "#ffffff",
      }
    },
  },
  plugins: [],
}

