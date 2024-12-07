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
  deleteReview,
  detailBlog,
  forgotPassword,
  getAllReviews,
  getWatchlist,
  highestRated,
  loadUser,
  login,
  loginWithGoogle,
  logout,
  recentlyAdded,
  register,
  reviewDetails,
  sliderData,
  updateReview,
} from "../lib/loaders";
import AddReview from "../pages/AddReview";
import AllReviews from "../pages/AllReviews";
import Auth from "../pages/Auth";
import DetailBlog from "../pages/DetailBlog";
import Error from "../pages/Error";
import GameWatchlist from "../pages/GameWatchlist";
import Home from "../pages/Home";
import MyReviews from "../pages/MyReviews";
import ReviewDetails from "../pages/ReviewDetails";
import UpdateReview from "../pages/UpdateReview";

export default [
  {
    path: "/",
    element: <RootLayout />,
    hydrateFallbackElement: <HydrateFallback />,
    errorElement: <Error />,
    loader: loadUser,
    children: [
      {
        index: true,
        element: <Home />,
        loader: highestRated,
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
        path: "blogs/:id",
        element: <DetailBlog />,
        loader: detailBlog,
      },

      {
        path: "myWatchlist",
        element: <PrivateRoute />,
        children: [
          {
            index: true,
            element: <GameWatchlist />,
            loader: getWatchlist,
          },
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
            loader: loadUser,
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
        path: "deleteReview/:id",
        element: <PrivateRoute />,
        loader: deleteReview,
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

  {
    path: "/slider",
    element: <Error />,
    loader: sliderData,
  },
  {
    path: "/recent",
    element: <Error />,
    loader: recentlyAdded,
  },
];
