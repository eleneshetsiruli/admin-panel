import { Table, Spin, Alert } from "antd";
import Column from "antd/es/table/Column";
import { EditOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useBlogs } from "../../hooks/useBlogs";

const BlogsList = () => {
  const { tableData, isLoading, isError } = useBlogs();
  const navigate = useNavigate();

  const handleNavigateToBlogEdit = (id: number) => {
    navigate(`/admin/dashboard/editBlog/${id}`);
  };

  const handleNavigateToBlogAdd = () => {
    navigate("/admin/dashboard/addBlog");
  };

  if (isLoading) return <Spin size="large" />;
  if (isError) return <Alert message="Error" type="error" />;

  return (
    <Table dataSource={tableData} rowKey={(record) => record.id} bordered>
      <Column title="title_en" dataIndex="title_en" />
      <Column title="description" dataIndex="description_en" />
      <Column title="created At" dataIndex="created_at" />

      <Column
        title="Edit"
        render={(_, record) => {
          return (
            <EditOutlined
              onClick={() => handleNavigateToBlogEdit(record.id)}
              className="text-xl text-orange-400 cursor-pointer"
            />
          );
        }}
      />
      <Column
        title="Add"
        render={() => (
          <PlusCircleOutlined
            onClick={handleNavigateToBlogAdd}
            className="text-xl text-orange-400 cursor-pointer"
          />
        )}
      />
    </Table>
  );
};

export default BlogsList;
