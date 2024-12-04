import { createContext, useEffect, useReducer } from "react";

import PropTypes from "prop-types";
import reducers from "./reducers";

// Initial state
const initialState = {
  theme: localStorage.getItem("vite-ui-theme") || null,
  user: null,
  isLoading: true,
};
// Create context
const GlobalStateContext = createContext({
  state: initialState,
  dispatch: () => null,
});

function GlobalStateProvider({
  children,
  storageKey = "vite-ui-theme",
  ...props
}) {
  const [state, dispatch] = useReducer(reducers, initialState);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (state.theme === null) {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
      dispatch({ type: "SET_THEME", payload: systemTheme });
      return;
    }

    root.classList.add(state.theme);
  }, [state.theme, storageKey]);

  return (
    <GlobalStateContext.Provider {...props} value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
}

GlobalStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
  storageKey: PropTypes.string,
};

export { GlobalStateContext, GlobalStateProvider };
