/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const { withAnimations } = require("animated-tailwindcss");
export default withAnimations({
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
  plugins: [require("daisyui"), require("tailwind-scrollbar")],
  daisyui: {
    themes: ["bumblebee", "business"],
  },
});
