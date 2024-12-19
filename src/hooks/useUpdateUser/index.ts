import { useMutation } from "@tanstack/react-query";
import { updateUserInAdmin } from "../../api/admin/updateUserInAdmin";

export const useUpdateUser = (id: string) => {
  return useMutation({
    mutationKey: ["updateUser", id],
    mutationFn: (values: { email: string; phone: string }) => {
      return updateUserInAdmin(id, values);
    },
    onSuccess: () => {
      console.log("User updated successfully");
    },
    onError: (error) => {
      console.error("Error updating user:", error);
    },
  });
};
