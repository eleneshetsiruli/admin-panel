import { userProps } from "../../components/form/interfaces";
import { supabase } from "../../supabase/account";

export const getSingleUser = async (id: string): Promise<userProps> => {
  const res = await supabase.auth.admin.getUserById(id);

  if (res.error) {
    throw new Error(res.error.message);
  }

  return res.data.user as userProps;
};
