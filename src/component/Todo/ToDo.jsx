import { PageHeader, Button } from "antd";
import React, { useState, Suspense } from "react";
const AddTodoModal = React.lazy(() => import("./AddTodoModal"));

function ToDo() {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setVisible(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    setVisible(false);
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
      <Suspense fallback={<div>Loading...</div>}>
        <AddTodoModal
          handleOk={handleOk}
          visible={visible}
          confirmLoading={confirmLoading}
          handleCancel={handleCancel}
        />
      </Suspense>
    </div>
  );
}

export default ToDo;
