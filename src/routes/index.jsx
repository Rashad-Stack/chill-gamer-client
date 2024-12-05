import HydrateFallback from "../components/HydrateFallback";
import Login from "../components/Login";
import Register from "../components/Register";
import RootLayout from "../components/RootLayout";
import Auth from "../pages/Auth";
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
        path: "game/:id",
        element: <div>Details</div>,
      },
      {
        path: "reviews",
        element: <div>Reviews</div>,
      },
      {
        path: "watch-list",
        element: <div>Watchlist</div>,
      },
      {
        path: "auth/",
        element: <Auth />,
        children: [
          {
            index: true,
            element: <Login />,
          },
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          },
        ],
      },
    ],
  },
];
