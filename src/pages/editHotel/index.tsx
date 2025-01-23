import { useParams, useNavigate } from "react-router-dom";
import { Spin, Alert, Form, Input, Button } from "antd";
import { useFetchHotel } from "../../hooks/useFetchHotel";
import { useUpdateHotel } from "../../hooks/useUpdateHotel";

export const EditHotel = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: hotel, isLoading, isError, error } = useFetchHotel(id || "");

  const { mutate: updateHotel } = useUpdateHotel();

  const handleSave = (values: any) => {
    updateHotel(
      { id: id || "", values },
      {
        onSuccess: () => {
          alert("Hotel updated successfully!");
          navigate("/admin/dashboard/hotels");
        },
        onError: (err) => {
          alert(`Error updating hotel: ${err.message}`);
        },
      }
    );
  };

  if (isLoading) return <Spin size="large" />;

  if (isError)
    return <Alert message={`Error: ${error?.message}`} type="error" />;

  return (
    <div>
      <h1>Edit Hotel</h1>
      <Form layout="vertical" initialValues={hotel} onFinish={handleSave}>
        <Form.Item
          label="Hotel Name (EN)"
          name="name_en"
          rules={[{ required: true, message: "Please enter the hotel name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description (EN)"
          name="description_en"
          rules={[{ required: true, message: "Please enter the description" }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Created At" name="created_at">
          <Input disabled />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Save
          </Button>
          <Button
            style={{ marginLeft: "10px" }}
            onClick={() => navigate("/admin/dashboard/hotels")}
          >
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
