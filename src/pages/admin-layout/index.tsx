import React from "react";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import { Link, Outlet } from "react-router-dom";

const { Header, Content, Sider } = Layout;

const items2: MenuProps["items"] = [
  {
    key: "users List",
    label: "Users ",

    children: [
      {
        key: 0,
        label: <Link to="dashboard">Users List</Link>,
      },
    ],
  },
  {
    key: "blogs",
    label: "Blogs",

    children: [
      {
        key: 1,
        label: <Link to="dashboard/blogs">Blogs List</Link>,
      },
    ],
  },

  {
    key: "hotels",
    label: "Hotels",

    children: [
      {
        key: 2,
        label: <Link to="dashboard/hotels">Hotels List</Link>,
      },
    ],
  },
];

export const AdminLayout: React.FC = () => {
  return (
    <Layout className="min-h-screen">
      <Header className="flex items-center bg-gray-800">
        <h1 className="text-lg text-white">ExploreEra</h1>
        <div className="demo-logo mr-4" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          className="flex-1 min-w-0"
        />
      </Header>
      <Content className="px-12 py-6">
        <Layout className="bg-gray-100 p-6 rounded-lg shadow-md">
          <Sider className="bg-gray-100" width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              className="h-full"
              items={items2}
            />
          </Sider>
          <Content className="px-6 py-6 min-h-[280px]">
            <Outlet />
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};
