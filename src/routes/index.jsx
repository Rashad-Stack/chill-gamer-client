import ForgotPassword from "../components/ForgotPassword";
import HydrateFallback from "../components/HydrateFallback";
import Login from "../components/Login";
import PrivateRoute from "../components/PrivateRoute";
import Register from "../components/Register";
import RootLayout from "../components/RootLayout";
import {
  addReview,
  addToWatchList,
  currentUserReviews,
  forgotPassword,
  getAllReviews,
  loadUser,
  login,
  loginWithGoogle,
  logout,
  register,
  reviewDetails,
  updateReview,
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
        loader: getAllReviews,
      },
      {
        path: "reviews",
        element: <AllReviews />,
        loader: getAllReviews,
      },
      {
        path: "review/:id",
        element: <ReviewDetails />,
        loader: reviewDetails,
        action: addToWatchList,
      },
      {
        path: "myWatchlist",
        element: <PrivateRoute />,
        children: [
          {
            index: true,
            element: <GameWatchlist />,
          },
          // {
          //   path: "addToWatchlist",
          //   action: addToWatchList,
          // },
        ],
      },
      {
        path: "add-review",
        element: <PrivateRoute />,
        action: addReview,
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
            loader: currentUserReviews,
          },
        ],
      },
      {
        path: "updateReview/:id",
        element: <PrivateRoute />,
        action: updateReview,
        children: [
          {
            index: true,
            element: <UpdateReview />,
            loader: reviewDetails,
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
