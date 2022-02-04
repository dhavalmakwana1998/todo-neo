import { Draggable } from "react-beautiful-dnd";
import React, { Suspense } from "react";
import styled from "styled-components";
import {
  TASK_PRIORITY,
  TASK_NAME,
  PRIORITY,
  API_URL,
  API_ROUTE,
  SUCCESS_MSG,
} from "../../utils/constant";

import {
  DeleteOutlined,
  EditOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Tooltip } from "antd";
import { Popconfirm, message } from "antd";
import useToDo from "../../Hooks/useToDo";
import axios from "axios";
import { dateInPast } from "../../utils/helper";

const AddTodoModal = React.lazy(() => import("./AddTodoModal"));

const CardHeader = styled.div`
  font-weight: 500;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
`;
const CardFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DragItem = styled.div`
  padding: 10px;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: white;
  margin: 0 0 8px 0;
  display: grid;
  grid-gap: 20px;
  flex-direction: column;
`;

const ListItem = ({ item, index }) => {
  const {
    formik,
    visible,
    setVisible,
    showEditModal,
    handleCancel,
    handleOk,
    loading,
    cancelDelete,
    confirmDelete,
    isEdit,
    stageBack,
    stageForward,
  } = useToDo();

  const editTask = () => {
    showEditModal(item);
  };

  return (
    <>
      <Draggable draggableId={item.id.toString()} index={index}>
        {(provided, snapshot) => {
          return (
            <DragItem
              ref={provided.innerRef}
              snapshot={snapshot}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <div className="d-flex justify-content-between">
                <h6 className="m-0 p-0">ID: {item.id}</h6>
                <div
                  class="btn-group btn-group-sm"
                  role="group"
                  aria-label="Basic example"
                >
                  <button
                    disabled={item.stage === TASK_NAME.Backlog}
                    type="button"
                    class="pb-2 p-1 m-0 btn btn-info"
                    onClick={() => stageBack(item.id, item)}
                  >
                    <LeftOutlined />
                  </button>
                  <button
                    disabled={item.stage === TASK_NAME.Done}
                    type="button"
                    class="pb-2 p-1 m-0 btn btn-info"
                    onClick={() => stageForward(item.id, item)}
                  >
                    <RightOutlined />
                  </button>
                </div>
              </div>
              <CardHeader className="d-flex justify-content-between">
                <span>{item.task}</span>
                <Tooltip title="Priority">
                  <span
                    className={`${
                      item.priority == PRIORITY.High
                        ? "text-danger"
                        : item.priority == PRIORITY.Medium
                        ? "text-warning"
                        : "text-muted"
                    }`}
                  >
                    {TASK_PRIORITY[item.priority]}
                  </span>
                </Tooltip>
              </CardHeader>

              <CardFooter>
                <Tooltip title="Due Date">
                  <span
                    className={`${
                      dateInPast(item.dueDate)
                        ? "text-danger font-weight-bold"
                        : "text-success font-weight-bold"
                    }`}
                  >
                    {item.dueDate}
                  </span>
                </Tooltip>
                <Author>
                  <div
                    class="btn-group btn-group-sm"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button type="button" class="pb-2 p-1 m-0 btn text-warning">
                      <Tooltip title="Edit Task">
                        <EditOutlined onClick={editTask} />
                      </Tooltip>
                    </button>
                    <button type="button" class="pb-2 p-1 m-0 btn text-danger">
                      <Tooltip title="Delete Task">
                        <Popconfirm
                          title="Are you sure to delete this task?"
                          onConfirm={() => confirmDelete(item.id)}
                          onCancel={cancelDelete}
                          okText="Yes"
                          cancelText="No"
                        >
                          <DeleteOutlined />
                        </Popconfirm>
                      </Tooltip>
                    </button>
                  </div>
                </Author>
              </CardFooter>
            </DragItem>
          );
        }}
      </Draggable>
      <Suspense fallback={<div>Loading...</div>}>
        <AddTodoModal
          handleOk={handleOk}
          visible={visible}
          handleCancel={handleCancel}
          formik={formik}
          loading={loading}
        />
      </Suspense>
    </>
  );
};

export default ListItem;
