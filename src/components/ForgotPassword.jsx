import { Button, Input, InputIcon, Label } from "keep-react";
import { Envelope } from "phosphor-react";
import { useState } from "react";
import { useFetcher, useLocation } from "react-router";
import Loading from "./Loading";

export default function ForgotPassword() {
  const fetcher = useFetcher();
  const { state } = useLocation();
  const [email, setEmail] = useState(state?.email || "");
  return (
    <fetcher.Form
      className="space-y-4"
      method="post"
      action="/auth/forgot-password">
      {fetcher.state === "submitting" && <Loading />}
      <div className="mb-4">
        <h3 className="text-primary-600 text-3xl font-extrabold">
          Forgot Password
        </h3>
        <p className="text-gray-500 text-sm mt-4 leading-relaxed">
          Enter your email address below and we will send you a link to reset
          your password.
        </p>
      </div>
      <div className="space-y-1">
        <fieldset className="space-y-1">
          <Label htmlFor="name">Email</Label>
          <div className="relative">
            <Input
              placeholder="Enter email"
              className="ps-11"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputIcon>
              <Envelope size={19} color="#AFBACA" />
            </InputIcon>
          </div>
        </fieldset>
      </div>

      <div className="!mt-8">
        <Button type="submit" className="w-full bg-primary-500">
          Reset Password
        </Button>
      </div>
    </fetcher.Form>
  );
}
