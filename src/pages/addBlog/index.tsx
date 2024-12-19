import { useState } from "react";
import { Form, Input, Button } from "antd";
import { addSingleBlog } from "../../api/blogs/addBlog";

export const AddSingleBlog = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onFinish = async (values: {
    title_en: string;
    description_en: string;
  }) => {
    setLoading(true);
    setError(null);
    try {
      await addSingleBlog(values);

      alert("Blog added successfully!");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

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
          <Button type="primary" htmlType="submit" loading={loading}>
            Add Blog
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
