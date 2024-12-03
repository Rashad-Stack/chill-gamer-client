import HydrateFallback from "../components/HydrateFallback";
import RootLayout from "../components/RootLayout";

export default [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <div>Error...</div>,
    hydrateFallbackElement: <HydrateFallback />,
    children: [
      {
        index: true,
        element: <div>Home</div>,
      },
    ],
  },
];
