import React from "react";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
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
];

export const AdminLayout: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: "0 48px" }}>
        <Layout
          style={{
            padding: "24px 0",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Sider style={{ background: colorBgContainer }} width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%" }}
              items={items2}
            />
          </Sider>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            <Outlet />
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};
