import { useMutation } from "@tanstack/react-query";
import { message } from "antd";
import { createUser } from "../../api/admin/createUser";
import { FieldType } from "../../pages/addUser/interfaces";

export const useCreateUser = () => {
  return useMutation({
    mutationFn: (values: FieldType) => createUser(values.email, values.phone),
    onSuccess: () => {
      message.success("User created successfully!");
    },
    onError: (error) => {
      message.error(`Error creating user: ${error.message}`);
    },
  });
};
