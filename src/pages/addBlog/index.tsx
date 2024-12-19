import { useState } from "react";
import { Form, Input, Button } from "antd";
import { useAddBlog } from "../../hooks/useAddBlog";

export const AddSingleBlog = () => {
  const [error, setError] = useState<string | null>(null);
  const { addBlog, error: mutationError } = useAddBlog();

  const onFinish = (values: { title_en: string; description_en: string }) => {
    setError(null);
    addBlog(values);
  };

  if (mutationError) {
    setError(
      mutationError instanceof Error
        ? mutationError.message
        : "An error occurred"
    );
  }

  return (
    <div>
      <h2>Add a New Blog</h2>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <Form
        onFinish={onFinish}
        style={{ maxWidth: 600, margin: "0 auto" }}
        layout="vertical"
      >
        <Form.Item
          label="Title (English)"
          name="title_en"
          rules={[{ required: true, message: "Please enter the blog title!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description (English)"
          name="description_en"
          rules={[
            { required: true, message: "Please enter the blog description!" },
          ]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add Blog
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
