import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { logIn } from "../../supabase/auth";
import { useAuthContext } from "../../context/auth/use-auth-context";

export const useLogin = () => {
  const { handleSetUser } = useAuthContext();
  const navigate = useNavigate();

  const {
    mutate: handleSignIn,
    isError,
    error,
  } = useMutation({
    mutationKey: ["logIn"],
    mutationFn: logIn,
    onSuccess: (response) => {
      const session = {
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
