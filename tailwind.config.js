/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary : "#121213",
        light : "rgb(248, 248, 248)",
        primary : "#538d4e",
        yellow : "#b59f3b",
      }
    },
  },
  plugins: [],
};
