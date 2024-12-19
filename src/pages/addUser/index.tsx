import React from "react";
import { Button, Form, Input } from "antd";
import { useCreateUser } from "../../hooks/useCreateUser";
import { FieldType } from "./interfaces";

export const AddUser: React.FC = () => {
  const { mutate } = useCreateUser();

  const onFinish = (values: FieldType) => {
    mutate(values);
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
