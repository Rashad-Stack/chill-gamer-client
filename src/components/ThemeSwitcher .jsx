import {
  Dropdown,
  DropdownAction,
  DropdownContent,
  DropdownItem,
} from "keep-react";
import { MoonStars, SunDim } from "phosphor-react";
import useGlobalState from "../hooks/useGlobalState.js";

const ThemeSwitcher = () => {
  const { dispatch } = useGlobalState();
  return (
    <Dropdown placement="bottom-start">
      <DropdownAction asChild>
        <button className="rounded-lg bg-primary-25 p-2.5 dark:bg-white">
          <MoonStars size={20} color="#1C222B" className="hidden dark:block" />
          <SunDim size={20} color="#444" className="block dark:hidden" />
          <span className="sr-only">Toggle theme</span>
        </button>
      </DropdownAction>
      <DropdownContent
        align="start"
        className="w-[180px] border border-metal-100 dark:border-metal-800 dark:bg-metal-900 dark:bg-black">
        <DropdownItem
          onClick={() => dispatch({ type: "SET_THEME", payload: "light" })}>
          Light
        </DropdownItem>
        <DropdownItem
          onClick={() => dispatch({ type: "SET_THEME", payload: "dark" })}>
          Dark
        </DropdownItem>
        <DropdownItem
          onClick={() => dispatch({ type: "SET_THEME", payload: "system" })}>
          System
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
};

export default ThemeSwitcher;
