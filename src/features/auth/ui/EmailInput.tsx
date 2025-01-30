import { Input, Label } from "@/src/shared/ui";

export function EmailInput() {
  return (
    <>
      <Label htmlFor="email">Email</Label>
      <Input type="email" name="email" placeholder="you@example.com" required />
    </>
  );
}
