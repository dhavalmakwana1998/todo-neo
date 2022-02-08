import React from "react";
import { PageHeader } from "antd";
import {
  FileDoneOutlined,
  UnorderedListOutlined,
  DeliveredProcedureOutlined,
  RollbackOutlined,
} from "@ant-design/icons";
import useToDo from "../Hooks/useToDo";
import { TASK_NAME, TASK_STATUS } from "../utils/constant";

function Dashboard() {
  const { elements } = useToDo();
  return (
    <div className="">
      <PageHeader className="mb-4 p-0" title="Dashboard"></PageHeader>
      <div className="row">
        <div className="dashboard-card col-lg-3 col-sm-6">
          <div className="p-4 rounded text-light card-box position-relative bg-primary">
            <div className="inner">
              <h3 className="text-light">
                {elements[TASK_STATUS[TASK_NAME.ToDo]].length}
              </h3>
              <p> TODO </p>
            </div>
            <div className="icon">
              <UnorderedListOutlined />
            </div>
          </div>
        </div>

        <div className="dashboard-card col-lg-3 col-sm-6">
          <div className="p-4 rounded text-light card-box position-relative bg-secondary">
            <div className="inner">
              <h3 className="text-light">
                {" "}
                {elements[TASK_STATUS[TASK_NAME.Ongoing]].length}{" "}
              </h3>
              <p> Ongoing </p>
            </div>
            <div className="icon">
              <DeliveredProcedureOutlined />
            </div>
          </div>
        </div>

        <div className="dashboard-card col-lg-3 col-sm-6">
          <div className="p-4 rounded text-light card-box position-relative bg-success">
            <div className="inner">
              <h3 className="text-light">
                {" "}
                {elements[TASK_STATUS[TASK_NAME.Done]].length}{" "}
              </h3>
              <p> Done </p>
            </div>
            <div className="icon">
              <FileDoneOutlined />
            </div>
          </div>
        </div>

        <div className="dashboard-card col-lg-3 col-sm-6">
          <div className="p-4 rounded text-light card-box position-relative bg-danger">
            <div className="inner">
              <h3 className="text-light">
                {" "}
                {elements[TASK_STATUS[TASK_NAME.Backlog]].length}{" "}
              </h3>
              <p> Backlog </p>
            </div>
            <div className="icon">
              <RollbackOutlined />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
