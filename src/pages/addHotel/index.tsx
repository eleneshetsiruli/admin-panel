import { useNavigate } from "react-router-dom";
import { useAddHotel } from "../../hooks/useAddHotel";
import { useState } from "react";
import { AddHotelValues } from "../../hooks/useAddHotel/types";
import { ADMIN_PATHS } from "../../routes/admin/dashboard/enum/index.enum";
import { Alert, Button, Form, Input } from "antd";

export const AddHotel: React.FC = () => {
  const navigate = useNavigate();
  const { mutate: addHotel, isError, error } = useAddHotel();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (values: AddHotelValues) => {
    setLoading(true);

    addHotel(values, {
      onSuccess: () => {
        alert("Hotel added successfully!");
        navigate(ADMIN_PATHS.HOTELS);
      },
      onError: (err: unknown) => {
        alert(`Error adding hotel: ${(err as Error).message}`);
      },
      onSettled: () => {
        setLoading(false);
      },
    });
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h1>Add New Hotel</h1>

      {isError && (
        <Alert message={`Error: ${error?.message}`} type="error" showIcon />
      )}

      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          label="Hotel Name (EN)"
          name="name_en"
          rules={[
            {
              required: true,
              message: "Please enter the hotel name in English",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Hotel Name (KA)"
          name="name_ka"
          rules={[
            {
              required: true,
              message: "Please enter the hotel name in Georgian",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description (EN)"
          name="description_en"
          rules={[
            {
              required: true,
              message: "Please enter the hotel description in English",
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          label="Description (KA)"
          name="description_ka"
          rules={[
            {
              required: true,
              message: "Please enter the hotel description in Georgian",
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          label="Country (EN)"
          name="country_en"
          rules={[
            {
              required: true,
              message: "Please enter the country name in English",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Country (KA)"
          name="country_ka"
          rules={[
            {
              required: true,
              message: "Please enter the country name in Georgian",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          rules={[{ required: true, message: "Please enter the price" }]}
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item
          label="Image URL"
          name="image"
          rules={[{ required: true, message: "Please enter the image URL" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Add Hotel
          </Button>
          <Button
            style={{ marginLeft: "10px" }}
            onClick={() => navigate("/hotels")}
          >
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
