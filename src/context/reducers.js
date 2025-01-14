import { SET_THEME } from "./actions";

// Reducer
const reducers = (state, action) => {
  switch (action.type) {
    case SET_THEME:
      localStorage.setItem("vite-ui-theme", action.payload);
      return {
        ...state,
        theme: action.payload,
      };

    default:
      return state;
  }
};

export default reducers;
