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
    500: "#45f882",
  },
  secondary: {
    500: "#0f161b",
  },
};

export default keepTheme(config, colorsPalette);
