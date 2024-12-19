import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useLogin } from "../../../hooks/useLogIn";
import { loginValues } from "./interfaces";
import React from "react";

export const SignInForm: React.FC = () => {
  const { handleSignIn } = useLogin();

  const onFinish = (values: loginValues) => {
    handleSignIn({
      email: values.email,
      password: values.password,
    });
  };

  return (
    <Form name="login" initialValues={{ remember: true }} onFinish={onFinish}>
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please input your Email!" }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Email" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};
