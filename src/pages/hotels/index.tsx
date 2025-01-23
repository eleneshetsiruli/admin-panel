import { useNavigate } from "react-router-dom";
import { Table, Spin, Alert } from "antd";
import { EditOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { useHotels } from "../../hooks/useHotels";

const { Column } = Table;

export const HotelView = () => {
  const { data: hotels, isLoading, isError } = useHotels();
  const navigate = useNavigate();

  const handleNavigateToHotelEdit = (id: number) => {
    navigate(`/admin/dashboard/editHotel/${id}`);
  };

  const handleNavigateToHotelAdd = () => {
    navigate("/admin/dashboard/addHotel");
  };

  if (isLoading) return <Spin size="large" />;
  if (isError) return <Alert message="Error fetching hotels" type="error" />;

  return (
    <Table dataSource={hotels} rowKey={(record) => record.id} bordered>
      <Column title="Hotel Name (EN)" dataIndex="name_en" />
      <Column title="Description (EN)" dataIndex="description_en" />
      <Column title="Created At" dataIndex="created_at" />
      <Column
        title="Edit"
        render={(_, record) => (
          <EditOutlined
            onClick={() => handleNavigateToHotelEdit(record.id)}
            className="text-xl text-orange-400 cursor-pointer"
          />
        )}
      />
      <Column
        title="Add"
        render={() => (
          <PlusCircleOutlined
            onClick={handleNavigateToHotelAdd}
            className="text-xl text-orange-400 cursor-pointer"
          />
        )}
      />
    </Table>
  );
};
