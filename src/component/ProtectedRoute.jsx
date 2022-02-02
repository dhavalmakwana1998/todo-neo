import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import Sidebar from "./Sidebar";
import { useStore } from "../Store/Store";
import routes from "../utils/routes";

const { Header, Sider, Content } = Layout;

const ProtectedRoute = () => {
  const { currentUser } = useStore();

  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return currentUser ? (
    <Layout className="h-100-vh">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Sidebar />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  ) : (
    <Navigate to={routes.login} />
  );
};

export default ProtectedRoute;
