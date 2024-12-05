import { Divider } from "keep-react";
import { Outlet, useLocation } from "react-router";
import LoginWithGithub from "../components/LoginWithGithub";
import LoginWithGoogle from "../components/LoginWithGoogle";

export default function Auth() {
  const location = useLocation();

  const isAuthRoute =
    location.pathname === "/auth/login" ||
    location.pathname === "/auth/register";

  return (
    <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4">
      <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
        <div className="border border-gray-300 rounded-lg p-6 md:max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
          <Outlet />

          {isAuthRoute && (
            <div className="space-y-3">
              <Divider className="my-3">Or</Divider>
              <LoginWithGoogle />
              <LoginWithGithub />
            </div>
          )}
        </div>
        <div className="max-md:mt-8">
          <img
            src="/video_games.svg"
            className="w-full h-full max-md:w-4/5 mx-auto block object-cover"
            alt="Dining Experience"
          />
        </div>
      </div>
    </div>
  );
}
