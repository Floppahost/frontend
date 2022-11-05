/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "venetian-red": "#C20114",
        "cg-blue": "#247BA0",
        "background": "#111111",
        "foreground": "#F8F8F8",
        "raisin-black": "#202030"
      },
    },
  },
  plugins: [],
}
