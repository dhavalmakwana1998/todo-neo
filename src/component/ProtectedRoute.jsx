import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Button, Layout } from "antd";
import Sidebar from "./Sidebar";
import { useStore } from "../Store/Store";
import routes from "../utils/routes";

const { Header, Sider, Content } = Layout;

const ProtectedRoute = () => {
  const { token, setToken, setCurrentUser, currentUser } = useStore();

  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return token ? (
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
          {currentUser && (
            <span>
              {" "}
              {currentUser.profile && (
                <img className="avtar" src={`${currentUser.profile}`} />
              )}
              Welcome! {currentUser.fullName}
            </span>
          )}
          <Button
            type="primary"
            style={{ float: "right", top: "12px", right: "36px" }}
            icon={<LogoutOutlined />}
            onClick={() => {
              setToken(false);
              setCurrentUser(false);
            }}
          >
            Logout
          </Button>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            overflowX: "scroll",
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
