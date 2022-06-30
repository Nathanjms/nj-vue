/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': { 'raw': '(min-height: 425px) and (min-width: 640px)' },
      }
    },
  },
  plugins: [],
  darkMode: 'class' 
}
