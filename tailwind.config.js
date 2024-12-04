import { keepTheme } from "keep-react/keepTheme";
// const defaultTheme = require("tailwindcss/defaultTheme");
import defaultTheme from "tailwindcss/defaultTheme";

const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Orbitron'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};

const colorsPalette = {
  metal: {
    25: "...",
    50: "...",
    100: "...",
    200: "...",
    300: "...",
    400: "...",
    500: "...",
    600: "...",
    700: "...",
    800: "...",
    900: "...",
  },
  primary: {
    50: "#e2ffed",
    100: "#ccffde",
    200: "#9cfcbd",
    300: "#68fa9a",
    400: "#3df87d",
    500: "#20f769",
    600: "#06f65f",
    700: "#00db4e",
    800: "#00c343",
    900: "#00a835",
  },
  secondary: {
    50: "#f2f5f8",
    100: "#e5e8e9",
    200: "#c7ced4",
    300: "#a5b4bf",
    400: "#899eae",
    500: "#7690a3",
    600: "#6c899f",
    700: "#5a768b",
    800: "#4e697d",
    900: "#3e5b6f",
  },
  dark: "#0f161b",
};

export default keepTheme(config, colorsPalette);
