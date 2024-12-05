import { Button, Input, InputIcon, Label } from "keep-react";
import { Envelope, Eye, EyeClosed, Lock } from "phosphor-react";
import { useState } from "react";
import { Link, useFetcher, useLocation } from "react-router";
import Loading from "./Loading";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const fetcher = useFetcher();
  const { state } = useLocation();

  return (
    <fetcher.Form
      className="space-y-4"
      method="post"
      action={`/auth/login?from=${state?.from || "/"}`}>
      {fetcher.state === "submitting" && <Loading />}
      <div className="mb-4">
        <h3 className="text-primary-500 text-3xl font-extrabold">Login</h3>
        <p className="text-gray-500 dark:text-gray-300 text-sm mt-4 leading-relaxed">
          Sign in to your account and explore a world of possibilities. Your
          journey begins here.
        </p>
      </div>
      <div className="space-y-4 dark:text-white">
        <fieldset className="space-y-1 ">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <Input
              id="email"
              placeholder="Enter email"
              className="ps-11 dark:bg-dark dark:text-white"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputIcon>
              <Envelope size={19} color="#AFBACA" />
            </InputIcon>
          </div>
        </fieldset>

        <fieldset className="space-y-1 dark:text-white">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              id="password"
              placeholder="Enter password"
              type={showPassword ? "text" : "password"}
              name="password"
              className="ps-11 dark:bg-dark dark:text-white"
            />

            <InputIcon>
              <Lock size={19} color="#AFBACA" />
            </InputIcon>

            <InputIcon
              className="start-auto end-2 pointer-events-auto cursor-pointer px-2"
              onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <EyeClosed size={19} color="#AFBACA" />
              ) : (
                <Eye size={19} color="#AFBACA" />
              )}
            </InputIcon>
          </div>
        </fieldset>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="text-sm">
          <Link
            to="/auth/forgot-password"
            className="text-primary-500 hover:underline font-semibold"
            state={{ email }}>
            Forgot your password?
          </Link>
        </div>
      </div>

      <div className="!mt-8">
        <Button type="submit" className="w-full">
          Login
        </Button>
      </div>
      <p className="text-sm !mt-8 text-center text-gray-500 dark:text-gray-300">
        Don&apos;t have an account?{" "}
        <Link
          to="/auth/register"
          href="javascript:void(0);"
          className="text-primary-500 font-semibold hover:underline ml-1 whitespace-nowrap">
          Register here
        </Link>
      </p>
    </fetcher.Form>
  );
}
