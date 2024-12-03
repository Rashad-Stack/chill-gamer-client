import { colors, keepTheme } from "keep-react/keepTheme";

const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // colors: {
    //   primary: {
    //     500: "#45f882",
    //   },
    //   secondary: colors.green,
    // },
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
  secondary: colors.green,
};

export default keepTheme(config, colorsPalette);
