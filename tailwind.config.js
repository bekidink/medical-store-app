/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4157FF",
        // secondary: "#0270FB",
        secondary: "#090F47",
        tertiary: "#1051A4",
        button: "#3E6DB5",
        accent: "#004360",
        dark: "#333333",
        light: "#F2F2F2",
        card: "#E3E4E5",
      },
      fontFamily: {
        montserrat: ["Monserrat", "san-serif"],
      },
    },
  },
  plugins: [],
};

