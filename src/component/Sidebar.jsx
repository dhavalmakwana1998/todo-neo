import React from "react";
import { UserOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Link, Routes } from "react-router-dom";
import routes from "../utils/routes";

function Sidebar() {
  return (
    <div>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<UnorderedListOutlined />}>
          <Link to={routes.todo}>ToDo</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          <Link to={routes.todo}>Profile</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Sidebar;
