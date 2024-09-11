"use client";
import GoogleSigninButton from "./google/GoogleSigninButton";
import GoogleCallback from "./google/callback/GoogleCallback";

export default function GoogleAuth() {
  return (
    <div>
      <GoogleSigninButton />
      <GoogleCallback/>
    </div>
  );
}
