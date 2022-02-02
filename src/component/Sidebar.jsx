import React from "react";
import { UnorderedListOutlined, FundOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Link, Routes } from "react-router-dom";
import routes from "../utils/routes";

function Sidebar() {
  return (
    <div>
      <div
        className="logo"
        style={{ color: "#FFF", textAlign: "center", padding: "4px" }}
      >
        LOGO
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<FundOutlined />}>
          <Link to={routes.dashboard}>Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<UnorderedListOutlined />}>
          <Link to={routes.todo}>ToDo</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Sidebar;
