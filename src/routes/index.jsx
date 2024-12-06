import ForgotPassword from "../components/ForgotPassword";
import HydrateFallback from "../components/HydrateFallback";
import Login from "../components/Login";
import PrivateRoute from "../components/PrivateRoute";
import Register from "../components/Register";
import RootLayout from "../components/RootLayout";
import {
  forgotPassword,
  loadUser,
  login,
  loginWithGoogle,
  logout,
  register,
} from "../lib/loaders";
import AddReview from "../pages/AddReview";
import AllReviews from "../pages/AllReviews";
import Auth from "../pages/Auth";
import GameWatchlist from "../pages/GameWatchlist";
import Home from "../pages/Home";
import MyReviews from "../pages/MyReviews";
import ReviewDetails from "../pages/ReviewDetails";
import UpdateReview from "../pages/UpdateReview";

export default [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <div>Error...</div>,
    hydrateFallbackElement: <HydrateFallback />,
    loader: loadUser,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "reviews",
        element: <AllReviews />,
      },
      {
        path: "review/:id",
        element: <ReviewDetails />,
      },
      {
        path: "myWatchlist",
        element: <PrivateRoute />,
        children: [
          {
            index: true,
            element: <GameWatchlist />,
          },
        ],
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
            element: <MyReviews />,
          },
        ],
      },
      {
        path: "updateReview/:id",
        element: <PrivateRoute />,
        children: [
          {
            index: true,
            element: <UpdateReview />,
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
            action: login,
          },
          {
            path: "login",
            element: <Login />,
            action: login,
          },
          {
            path: "register",
            element: <Register />,
            action: register,
          },
          {
            path: "forgot-password",
            element: <ForgotPassword />,
            action: forgotPassword,
          },

          {
            path: "login-with-google",
            loader: loginWithGoogle,
          },

          {
            path: "logout",
            loader: logout,
          },
        ],
      },
    ],
  },
];
