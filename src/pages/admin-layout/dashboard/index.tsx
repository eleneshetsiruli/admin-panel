import { Table } from "antd";
import { mapUsersListForAdmin } from "../../../api/admin/utils";
import { EditOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useUsersList } from "../../../hooks/useUsersList";

export const Dashboard = () => {
  const navigate = useNavigate();
  const { Column } = Table;

  const { data, error, isLoading } = useUsersList();

  const handleNavigateToUserAdd = () => {
    navigate(`/admin/dashboard/addUser`);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }
  if (!data) {
    return <div>No data available</div>;
  }

  const handleNavigateToUserEdit = (id: string) => {
    navigate(`/admin/dashboard/editUser/${id}`);
  };

  const tableData = mapUsersListForAdmin(data.users);

  return (
    <div className="h-[80vh]">
      <Table
        rowKey={(record) => record.email || record.createdAt}
        dataSource={tableData}
        bordered
      >
        <Column title="Email" dataIndex="email" />
        <Column title="Created At" dataIndex="createdAt" />
        <Column title="Phone" dataIndex="phone" />
        <Column title="Last Sign In" dataIndex="lastSignIn" />

        <Column
          title="Edit"
          render={(_, record) => {
            return (
              <EditOutlined
                onClick={() => handleNavigateToUserEdit(record.id)}
                className="text-xl text-orange-400 cursor-pointer"
              />
            );
          }}
        />
        <Column
          title="Add"
          render={() => (
            <PlusCircleOutlined
              onClick={handleNavigateToUserAdd}
              className="text-xl text-orange-400 cursor-pointer"
            />
          )}
        />
      </Table>
    </div>
  );
};
