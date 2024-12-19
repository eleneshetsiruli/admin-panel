import { supabase } from "../account";

export const logIn = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error("Auth Error: " + error.message);
  }

  const { data: sessionData, error: sessionError } =
    await supabase.auth.getSession();

  if (sessionError) {
    throw new Error("Session Error: " + sessionError.message);
  }

  const token = sessionData?.session?.access_token;

  if (!token) {
    throw new Error("No token received");
  }

  return { user: data.user, token };
};
