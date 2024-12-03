import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-dvh">
      <>Header</>
      <main className="flex-1">
        <Outlet />
      </main>
      <>Footer</>
    </div>
  );
}
