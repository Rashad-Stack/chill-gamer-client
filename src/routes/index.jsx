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
      {
        path: "/game/:id",
        element: <div>Details</div>,
      },
      {
        path: "/reviews",
        element: <div>Reviews</div>,
      },
      {
        path: "/watch-list",
        element: <div>Watchlist</div>,
      },
      {
        path: "/login",
        element: <div>Watchlist</div>,
      },
      {
        path: "/register",
        element: <div>Watchlist</div>,
      },
    ],
  },
];
