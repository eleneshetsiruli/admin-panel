import { supabase } from "../../supabase/account";

export const updateUserInAdmin = (
  id: string,
  payload: { email: string; phone: string },
) => {
  return supabase.auth.admin.updateUserById(id, { ...payload });
};
