import { useParams } from "react-router-dom";
import { useFetchBlogById } from "../../../hooks/useFetchBlogById";
import { FieldType } from "./interfaces";
import { Loading } from "../../loading";
import { Button, Form, Input } from "antd";
import { useUpdateBlogMutation } from "../../../hooks/useUpdateBlog";

const EditBlog = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useFetchBlogById(id);
  const { mutate } = useUpdateBlogMutation(id!);

  if (isLoading) return <Loading text="data" />;
  if (isError) return <div>Error loading data</div>;

  const onFinish = (values: FieldType) => {
    mutate(values);
  };

  return (
    <Form
      initialValues={{
        title_en: data?.title_en,
        description_en: data?.description_en,
      }}
      name="edit-blog"
      style={{ maxWidth: 600 }}
      onFinish={onFinish}
    >
      <Form.Item<FieldType>
        label="Title"
        name="title_en"
        rules={[{ required: true, message: "Please input title!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Description"
        name="description_en"
        rules={[{ required: true, message: "Please input your description!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditBlog;
