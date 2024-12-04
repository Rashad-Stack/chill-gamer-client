import { Switch } from "keep-react";
import useGlobalState from "../hooks/useGlobalState.js";

const ThemeSwitcher = () => {
  const { dispatch } = useGlobalState();

  const handleThemeChange = (value) => {
    if (value) {
      return dispatch({ type: "SET_THEME", payload: "dark" });
    }

    dispatch({ type: "SET_THEME", payload: "light" });
  };

  return (
    <Switch
      variant="icon"
      onCheckedChange={handleThemeChange}
      className="border border-primary-500"
    />
  );
};

export default ThemeSwitcher;
