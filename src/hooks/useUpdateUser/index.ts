import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { updateUserInAdmin } from "../../api/admin/updateUserInAdmin";
import { UpdateUserResponse, UpdateUserVariables } from "./types";
import { USERS_QUERY_KEYS } from "../../routes/users/enum";

export const useUpdateUser = (
  id: string,
): UseMutationResult<
  UpdateUserResponse,
  Error,
  UpdateUserVariables,
  unknown
> => {
  return useMutation<UpdateUserResponse, Error, UpdateUserVariables>({
    mutationKey: [USERS_QUERY_KEYS.UPDATE, id],
    mutationFn: (values: UpdateUserVariables) => {
      return updateUserInAdmin(id, values);
    },
    onSuccess: () => {
      console.log("User updated successfully");
    },
    onError: (error: Error) => {
      console.error("Error updating user:", error);
    },
  });
};
