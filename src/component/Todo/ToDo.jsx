import { PageHeader, Button } from "antd";
import React, { Suspense } from "react";
import useToDo from "../../Hooks/useToDo";
import DragList from "./DragList";
import { usePrevious } from "../../utils/helper";

const AddTodoModal = React.lazy(() => import("./AddTodoModal"));

function ToDo() {
  const {
    loading,
    formik,
    visible,
    showModal,
    handleCancel,
    handleOk,
    elements,
    setElements,
    generateLists,
    isEdit,
    isTaskRender,
  } = useToDo();

  // const prevElemets = usePrevious(elements);
  // useEffect(() => {
  //   if (JSON.stringify(elements) == JSON.stringify(prevElemets)) {
  //     alert();
  //   }
  // }, [isTaskRender]);

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
      <DragList elements={elements} />
      <Suspense fallback={<div>Loading...</div>}>
        <AddTodoModal
          handleOk={handleOk}
          visible={visible}
          handleCancel={handleCancel}
          formik={formik}
          loading={loading}
        />
      </Suspense>
    </div>
  );
}

export default ToDo;
