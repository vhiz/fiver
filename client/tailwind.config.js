/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1310px",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["bumblebee", "business"],
  },
};
