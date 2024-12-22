import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { message } from "antd";
import { createUser } from "../../api/admin/createUser";
import { FieldType } from "../../pages/addUser/interfaces";
import { User } from "@supabase/supabase-js";
import { USERS_QUERY_KEYS } from "../../routes/users/enum";

export const useCreateUser = (): UseMutationResult<
  { user: User } | undefined,
  Error,
  FieldType
> => {
  return useMutation<{ user: User } | undefined, Error, FieldType>({
    mutationKey: [USERS_QUERY_KEYS.CREATE],
    mutationFn: (values: FieldType) => createUser(values.email, values.phone),
    onSuccess: () => {
      message.success("User created successfully!");
    },
    onError: (error) => {
      message.error(`Error creating user: ${error.message}`);
    },
  });
};
