import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"], // use built-in themes
    darkTheme: "dark", // specify which theme to use in dark mode
  },
  darkMode: "class", // enables manual control via "dark" class
};
