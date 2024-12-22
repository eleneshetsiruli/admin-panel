import { Form, Input, Button } from "antd";
import { useAddBlog } from "../../hooks/useAddBlog";
import { Blog } from "../blogs/interfaces";

const AddSingleBlog = () => {
  const { addBlog, error } = useAddBlog();

  const onFinish = (values: Blog) => {
    addBlog(values);
  };

  return (
    <div>
      <h2>Add a New Blog</h2>
      {error && (
        <div style={{ color: "red" }}>
          {error instanceof Error ? error.message : "An error occurred"}
        </div>
      )}
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
export default AddSingleBlog;
