/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,svelte}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "default": "IBM Plex Sans, sans-serif"
      }
    },
  },
  plugins: [],
}
