import { PageHeader, Button } from "antd";
import React, { useState, Suspense } from "react";
import useToDo from "../../Hooks/useToDo";
import DragList from "./DragList";
const AddTodoModal = React.lazy(() => import("./AddTodoModal"));

function ToDo() {
  const { loading, formik } = useToDo();
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(loading);

  const showModal = () => {
    formik.resetForm();
    setVisible(true);
  };
  const handleOk = () => {
    setConfirmLoading(loading);
    formik.handleSubmit();
    setVisible(false);
  };
  const handleCancel = () => {
    setVisible(false);
    formik.resetForm();
  };

  return (
    <div>
      <PageHeader
        className="mb-4 p-0"
        title="TODO"
        extra={[
          <Button key="1" type="primary" onClick={showModal}>
            Add ToDo
          </Button>,
        ]}
      ></PageHeader>
      <DragList />
      <Suspense fallback={<div>Loading...</div>}>
        <AddTodoModal
          handleOk={handleOk}
          visible={visible}
          confirmLoading={confirmLoading}
          handleCancel={handleCancel}
          formik={formik}
          loading={loading}
        />
      </Suspense>
    </div>
  );
}

export default ToDo;
