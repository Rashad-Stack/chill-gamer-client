import HydrateFallback from "../components/HydrateFallback";
import RootLayout from "../components/RootLayout";
import Home from "../pages/Home";

export default [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <div>Error...</div>,
    hydrateFallbackElement: <HydrateFallback />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
];
