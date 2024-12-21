import { useQuery } from "@tanstack/react-query";
import { Table } from "antd";
import Column from "antd/es/table/Column";
import { fetchBlogs } from "../../api/blogs/fetchBlogs";
import { mapBlogsListForAdmin } from "./utils";
import { EditOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const BlogsList = () => {
  const { data } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });
  const navigate = useNavigate();

  const handleNavigateToBlogEdit = (id: number) => {
    navigate(`/admin/dashboard/editBlog/${id}`);
  };

  const tableData = data ? mapBlogsListForAdmin(data) : [];
  const handleNavigateToBlogAdd = () => {
    navigate("/admin/dashboard/addBlog");
  };

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
