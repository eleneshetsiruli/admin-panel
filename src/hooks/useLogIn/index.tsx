import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { logIn } from "../../supabase/auth";

export const useLogin = () => {
  const navigate = useNavigate();

  const {
    mutate: handleSignIn,
    isError,
    error,
  } = useMutation({
    mutationKey: ["logIn"],
    mutationFn: logIn,
    onSuccess: () => {
      navigate("admin/dashboard");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return { handleSignIn, isError, error };
};
