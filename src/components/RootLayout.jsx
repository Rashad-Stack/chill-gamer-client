import { useEffect } from "react";
import { Outlet, useLoaderData } from "react-router";
import { SET_USER } from "../context/actions";
import useGlobalState from "../hooks/useGlobalState";
import Footer from "./Footer";
import Header from "./Header";

export default function RootLayout() {
  const user = useLoaderData();
  const { dispatch } = useGlobalState();

  useEffect(() => {
    if (user) {
      dispatch({ type: SET_USER, payload: user });
    } else {
      dispatch({ type: SET_USER, payload: null });
    }
  }, [user, dispatch]);

  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1 ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
