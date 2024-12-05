import { Navigate, Outlet, useLocation } from "react-router";

export default function PrivateRoute() {
  const { pathname } = useLocation();
  const user = true; // auth.currentUser;

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/auth/login" replace={true} state={{ from: pathname }} />
  );
}
