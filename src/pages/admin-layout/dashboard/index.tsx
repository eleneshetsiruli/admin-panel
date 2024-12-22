import { Table } from "antd";
import { mapUsersListForAdmin } from "../../../api/admin/utils";
import { EditOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useUsersList } from "../../../hooks/useUsersList";
import { Loading } from "../../loading";
import { navigateToUserAdd, navigateToUserEdit } from "./utils";
import { User } from "@supabase/supabase-js";

export const Dashboard = () => {
  const { data, error, isLoading } = useUsersList<User[]>();
  const navigate = useNavigate();
  const { Column } = Table;

  if (isLoading) return <Loading text="data" />;
  if (error instanceof Error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data available</div>;
  console.log(data);
  const tableData = mapUsersListForAdmin(data);

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
          render={(_, record) => (
            <EditOutlined
              onClick={() => navigateToUserEdit(record.id, navigate)}
              className="text-xl text-orange-400 cursor-pointer"
            />
          )}
        />
        <Column
          title="Add"
          render={() => (
            <PlusCircleOutlined
              onClick={() => navigateToUserAdd(navigate)}
              className="text-xl text-orange-400 cursor-pointer"
            />
          )}
        />
      </Table>
    </div>
  );
};
