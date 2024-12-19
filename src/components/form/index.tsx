import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { useParams } from "react-router-dom";
import { useGetUser } from "../../api/admin/interfaces/hooks/useGetUser";
import { Loading } from "../../pages/loading";
import { useUpdateUser } from "../../hooks/useUpdateUser";

export const UpdateUserForm: React.FC = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetUser(id);

  const mutation = useUpdateUser(id!);

  const onFinish: FormProps<{ email: string; phone: string }>["onFinish"] = (
    values
  ) => {
    if (values.email && values.phone) {
      mutation.mutate(values);
    }
  };

  if (isLoading) {
    return <Loading text="user Data" />;
  }

  return (
    <Form onFinish={onFinish} className="h-[80vh] max-w-[320px]">
      <Form.Item
        label="Email"
        name="email"
        initialValue={data?.email}
        rules={[{ required: true, message: "Please input new Email!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Phone"
        name="phone"
        initialValue={data?.phone}
        rules={[{ required: true, message: "Please input new Phone!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </Form.Item>
    </Form>
  );
};
