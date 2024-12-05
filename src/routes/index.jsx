import HydrateFallback from "../components/HydrateFallback";
import Login from "../components/Login";
import PrivateRoute from "../components/PrivateRoute";
import Register from "../components/Register";
import RootLayout from "../components/RootLayout";
import AddReview from "../pages/AddReview";
import Auth from "../pages/Auth";
import Home from "../pages/Home";
import ReviewDetails from "../pages/ReviewDetails";

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
        path: "reviews",
        element: <div>Reviews</div>,
      },
      {
        path: "review/:id",
        element: <ReviewDetails />,
      },
      {
        path: "watch-list",
        element: <div>Watchlist</div>,
      },
      {
        path: "add-review",
        element: <PrivateRoute />,
        children: [
          {
            index: true,
            element: <AddReview />,
          },
        ],
      },
      {
        path: "my-reviews",
        element: <PrivateRoute />,
        children: [
          {
            index: true,
            element: <div>My Review</div>,
          },
        ],
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
