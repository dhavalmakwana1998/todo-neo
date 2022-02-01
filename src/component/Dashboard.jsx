import React from "react";
import { PageHeader } from "antd";
import {
  FileDoneOutlined,
  UnorderedListOutlined,
  DeliveredProcedureOutlined,
  RollbackOutlined,
} from "@ant-design/icons";

function Dashboard() {
  return (
    <div className="">
      <PageHeader className="mb-4 p-0" title="Dashboard"></PageHeader>
      <div class="row">
        <div class="dashboard-card col-lg-3 col-sm-6">
          <div class="p-4 rounded text-light card-box position-relative bg-primary">
            <div class="inner">
              <h3 className="text-light"> 13436 </h3>
              <p> TODO </p>
            </div>
            <div class="icon">
              <UnorderedListOutlined />
            </div>
          </div>
        </div>

        <div class="dashboard-card col-lg-3 col-sm-6">
          <div class="p-4 rounded text-light card-box position-relative bg-secondary">
            <div class="inner">
              <h3 className="text-light"> 5464 </h3>
              <p> Ongoing </p>
            </div>
            <div class="icon">
              <DeliveredProcedureOutlined />
            </div>
          </div>
        </div>

        <div class="dashboard-card col-lg-3 col-sm-6">
          <div class="p-4 rounded text-light card-box position-relative bg-success">
            <div class="inner">
              <h3 className="text-light"> ₹185358 </h3>
              <p> Done </p>
            </div>
            <div class="icon">
              <FileDoneOutlined />
            </div>
          </div>
        </div>

        <div class="dashboard-card col-lg-3 col-sm-6">
          <div class="p-4 rounded text-light card-box position-relative bg-danger">
            <div class="inner">
              <h3 className="text-light"> 723 </h3>
              <p> Backlog </p>
            </div>
            <div class="icon">
              <RollbackOutlined />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
