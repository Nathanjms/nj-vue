/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", "./node_modules/vue3-tailwind-modal/**/*.js"],
  theme: {
    extend: {
      screens: {
        sm: {
          raw: "(min-height: 425px) and (min-width: 640px)",
        },
      },
    },
  },
  darkMode: "class",
};
