import { createUser } from "@/features/auth/api/create-user";
import { useActionState } from "react";
import { AuthFormState } from "./auth.interface";
import { LOGIN_PATHNAME } from "@/src/shared/config/pathname";
import { redirect } from "next/navigation";

export const useSignUpActionState = () => {
  const signUpWithFormData = async (
    prevState: AuthFormState,
    formData: FormData,
  ) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const signUpRes = await createUser({ email, password });
    if (signUpRes.message !== "SUCCESS") {
      return signUpRes;
    }

    redirect(LOGIN_PATHNAME);
  };

  const [signUpFormState, singUpAndLoginAction] = useActionState<
    AuthFormState,
    FormData
  >(signUpWithFormData, null);

  return { signUpFormState, singUpAndLoginAction };
};
