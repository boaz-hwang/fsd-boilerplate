"use client";

import { Button } from "@/shared/ui/button";
import { useSignUpActionState } from "@/features/auth/model/useSignUpActionState";
import { EmailInput, PasswordInput } from "@/src/features/auth/ui";
import { Input, Label } from "@/src/shared/ui";

export default function SignUpForm() {
  const { signUpFormState, singUpAndLoginAction } = useSignUpActionState();

  return (
    <form
      action={singUpAndLoginAction}
      className="flex w-full flex-1 flex-col justify-center gap-4 text-foreground"
    >
      <Label htmlFor="email">Email</Label>
      <Input type="email" name="email" placeholder="you@example.com" required />

      <Label htmlFor="password">Password</Label>
      <Input
        type="password"
        name="password"
        placeholder="••••••••"
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}"
        title="Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character."
        required
      />

      <Button className="mt-4">Sign Up</Button>
      <p className="mt-4 p-4 text-center text-foreground">
        {signUpFormState?.message}
      </p>
    </form>
  );
}
