import { useQuery } from "@tanstack/react-query";
import { Button, Form, Input } from "antd";
import { fetchBlogById } from "../../../api/blogs/getSingleBlog";
import { useParams } from "react-router-dom";
import { supabase } from "../../../supabase/account";

export const EditBlog = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["blogs", id],
    queryFn: () => fetchBlogById(id),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  type FieldType = {
    title_en?: string;
    description_en?: string;
  };

  const onFinish = async (values: FieldType) => {
    try {
      const { title_en, description_en } = values;

      const { error } = await supabase
        .from("blogs")
        .update({ title_en, description_en })
        .eq("id", id);

      if (error) {
        throw new Error(error.message);
      }

      alert("Blog updated successfully!");
    } catch (error) {
      console.error("Error updating blog:", error);
      alert("Failed to update blog");
    }
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
