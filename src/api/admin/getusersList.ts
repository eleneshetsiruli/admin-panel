import { User } from "@supabase/supabase-js";
import { supabase } from "../../supabase/account";

export const getUsersList = async (): Promise<User[]> => {
  const { data, error } = await supabase.auth.admin.listUsers();
  if (error) {
    throw new Error("Error fetching users" + error.message);
  }
  return data?.users || [];
};
