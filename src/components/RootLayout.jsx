import { ToastWrapper } from "keep-react";
import { Outlet, ScrollRestoration } from "react-router";
import useGlobalState from "../hooks/useGlobalState";
import Footer from "./Footer";
import Header from "./Header";

export default function RootLayout() {
  const { theme } = useGlobalState();
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1 ">
        <Outlet />
        <ScrollRestoration />
      </main>
      <Footer />

      <ToastWrapper richColors={true} theme={theme} />
    </div>
  );
}
