import React from "react";
import { Button, Form, Input, message } from "antd";
import { useMutation } from "@tanstack/react-query";
import { createUser } from "../../api/admin/createUser";
import { FieldType } from "./interfaces";

export const AddUser: React.FC = () => {
  const mutation = useMutation({
    mutationFn: (values: FieldType) => createUser(values.email, values.phone),
    onSuccess: () => {
      message.success("User created successfully!");
    },
    onError: (error) => {
      message.error(`Error creating user: ${error.message}`);
    },
  });

  const onFinish = (values: FieldType) => {
    mutation.mutate(values);
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Please input the email!" },
          { type: "email", message: "Please enter a valid email!" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Phone"
        name="phone"
        rules={[{ required: true, message: "Please input the phone number!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Create User
        </Button>
      </Form.Item>
    </Form>
  );
};
