/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  backgroundImage: {
    'bg-image': "url('/homeBG.png')",
  },
  theme: {
    extend: {},
  },
  fontFamily: {
    sans: ["Poppins", "sans-serif"],
  },
  plugins: [],
}