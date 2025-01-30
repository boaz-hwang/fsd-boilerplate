"use client";

import { Button } from "@/shared/ui/button";
import { useState } from "react";
import { Input } from "@/src/shared/ui";
import { Label } from "@radix-ui/react-label";
import { createUser } from "@/src/features/auth/api/create-user";

const numberRegex = /\d/;
const lowercaseRegex = /[a-z]/;
const uppercaseRegex = /[A-Z]/;
const specialCharRegex = /[@$!%*?&]/;

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 0) {
      setEmailError("Email is required");
    } else if (!e.target.value.includes("@")) {
      setEmailError("Add @ to your email");
    } else {
      setEmailError("");
    }

    setEmail(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 0) {
      setPasswordError("Password is required");
    } else if (e.target.value.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
    } else if (!numberRegex.test(e.target.value)) {
      setPasswordError("Password must include at least one number");
    } else if (!lowercaseRegex.test(e.target.value)) {
      setPasswordError("Password must include at least one lowercase letter");
    } else if (!uppercaseRegex.test(e.target.value)) {
      setPasswordError("Password must include at least one uppercase letter");
    } else if (!specialCharRegex.test(e.target.value)) {
      setPasswordError("Password must include at least one special character");
    } else {
      setPasswordError("");
    }

    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      await createUser({ email, password });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex w-full flex-1 flex-col justify-center gap-4 text-foreground">
      <Label htmlFor="email">Email</Label>
      <Input
        name="email"
        placeholder="you@example.com"
        value={email}
        onChange={handleChangeEmail}
      />
      {emailError && <p className="text-red-500">{emailError}</p>}

      <Label htmlFor="password">Password</Label>
      <Input
        name="password"
        placeholder="••••••••"
        value={password}
        onChange={handleChangePassword}
      />
      {passwordError && <p className="text-red-500">{passwordError}</p>}

      <Button onClick={handleSubmit} className="mt-4">
        Sign Up
      </Button>
    </div>
  );
}
