import React from "react";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/";

export default function LoginPage() {
  return (
    <main>
      <h1>Repair Shop</h1>
      <LoginLink>Sign In</LoginLink>
    </main>
  );
}
