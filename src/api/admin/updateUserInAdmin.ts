import { UpdateUserResponse } from "../../hooks/useUpdateUser/types";
import { supabase } from "../../supabase/account";

export const updateUserInAdmin = async (
  id: string,
  payload: { email: string; phone: string }
): Promise<UpdateUserResponse> => {
  const { error } = await supabase.auth.admin.updateUserById(id, {
    ...payload,
  });

  if (error) {
    throw new Error(error.message);
  }

  return {
    success: true,
    message: "User updated successfully",
  };
};
