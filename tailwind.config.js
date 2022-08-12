/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      serif: ["Nunito", "sans-serif"],
    },
    extend: {
      colors: {
        background_l: "#f4f8fc",
        background_d: "#334155",
        blue_l: "#edeffa",
        green_l: "#e5f6f5",
        green_d: "#02a8a2",
        primary_l: "#90BAEF",
        primary_blue_l: "#3383e2",
        primary_d: "#4a61d2",
        text_gray: "#6a7986",
        purple_d: "#dc4c97",
        orange_l: "#fff2ee",
        orange_d: "#fc835e",
      },
    },
  },
  plugins: [],
};
