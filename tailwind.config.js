/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#121213",
        light: "rgb(248, 248, 248)",
        primary: "#538d4e",
        yellow: "#b59f3b",
        grey: "#818384",
        darkGrey: "#3A3A3C",
      },
      animation: {
        "small-pulse": "small-pulse 100ms ease-in-out forwards ",
      },
      keyframes: {
        "small-pulse": {
          "0%, 100%": { transform: " scale(1)" },
          "50%": { transform: " scale(1.1)" },
        },
      },
    },
  },
  plugins: [],
};
