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
        success: "#00875f",
        green: "#67E480",
        warning: "#E89E64",
        danger: "#E96379",
        purple: "#988BC7",
        cyan: "#78D1E1",
        blue: "#4863f7",
        lime: "#67E480",
        background: {
          100: "#0e0c14",
          150: "#191622",
          200: "#41414D",
          300: "#44475a",
          400: "#4e5269",
        },
      },
    },
  },
  plugins: [],
};
