import { useContext } from "react";
import { GlobalStateContext } from "../context/GlobalStateProvider";

export default function useGlobalState() {
  const context = useContext(GlobalStateContext);

  if (context === undefined) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }

  const { state, dispatch } = context;

  return { ...state, dispatch };
}
