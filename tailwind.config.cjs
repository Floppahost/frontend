/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,svelte}",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        "main": "#06B6D4"
      },
      fontFamily: {
        "default": "IBM Plex Sans, sans-serif"
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
