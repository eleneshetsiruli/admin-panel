import { supabase } from "../../supabase/account";

export const getSingleUser = async (id: string) => {
  return supabase.auth.admin.getUserById(id).then((res) => {
    return res.data.user;
  });
};
