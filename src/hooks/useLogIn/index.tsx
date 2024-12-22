import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth/use-auth-context";
import { logIn } from "../../supabase/auth";
import { LoginResponse, Sessions } from "./types";

export const useLogin = (): {
  handleSignIn: (data: unknown) => void;
  isError: boolean;
  error: unknown;
} => {
  const { handleSetUser } = useAuthContext();
  const navigate = useNavigate();

  const {
    mutate: handleSignIn,
    isError,
    error,
  }: UseMutationResult<LoginResponse, any, any, unknown> = useMutation({
    mutationKey: ["logIn"],
    mutationFn: logIn,
    onSuccess: (response: LoginResponse) => {
      const session: Sessions = {
        access_token: response.token,
        refresh_token: "",
        expires_in: 3600,
        token_type: "Bearer",
        user: response.user,
      };

      handleSetUser(session);
      navigate("/admin/dashboard");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return { handleSignIn, isError, error };
};
