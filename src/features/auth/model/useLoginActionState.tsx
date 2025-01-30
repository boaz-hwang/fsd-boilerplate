import { login } from "@/features/auth/api/login";
import { useActionState } from "react";
import { AuthFormState } from "./auth.interface";
import { MAIN_PATHNAME } from "@/src/shared/config/pathname";
import { redirect } from "next/navigation";

export const useLoginActionState = () => {
  const loginWithFormData = async (
    prevState: AuthFormState,
    formData: FormData,
  ) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const res = await login({ email, password });

    if (res.message !== "SUCCESS") {
      return res;
    }

    redirect(MAIN_PATHNAME);
  };

  const [loginFormState, loginFormAction] = useActionState<
    AuthFormState,
    FormData
  >(loginWithFormData, null);

  return { loginFormState, loginFormAction };
};
