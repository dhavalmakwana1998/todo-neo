import { Modal, Form, Select, DatePicker } from "antd";
import React, { createRef, useEffect } from "react";
import CommonInput from "../../widgets/Inputs/CommonInput";

const { Option } = Select;

function AddTodoModal({
  visible,
  handleCancel,
  handleOk,
  confirmLoading,
  formik,
  loading,
}) {
  const inputElement = createRef();

  useEffect(() => {
    inputElement?.current?.focus();
  }, []);

  function onChange(date, dateString) {
    formik.setFieldValue("dueDate", dateString);
  }

  return (
    <Modal
      title="Add ToDo"
      visible={visible}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      <Form
        onSubmit={formik.handleSubmit}
        onKeyDown={(e) => {
          if ((e.key === "Enter" || e.key === "NumpadEnter") && !loading) {
            formik.handleSubmit();
          }
        }}
      >
        <div className="my-2">
          <CommonInput
            ref={inputElement}
            type="text"
            placeholder="Task"
            inputName="task"
            label="Task"
            inputId="task"
            {...formik.getFieldProps("task")}
          />
          {formik.touched.task && formik.errors.task && (
            <div className="mt-1 text-sm text-danger">{formik.errors.task}</div>
          )}
        </div>
        <div className="row my-2">
          <div className="col-12 col-md-6">
            <label htmlFor="stage">Stage</label>
            <Select defaultValue="0" style={{ width: "100%" }} disabled>
              <Option value="0">Backlog</Option>
            </Select>
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="priority">Priority</label>
            <Select
              style={{ width: "100%" }}
              onChange={(e) => formik.setFieldValue("priority", e)}
              allowClear
            >
              <Option value="0">High</Option>
              <Option value="1">Medium</Option>
              <Option value="2">Low</Option>
            </Select>
            {formik.touched.priority && formik.errors.priority && (
              <div className="mt-1 text-sm text-danger">
                {formik.errors.priority}
              </div>
            )}
          </div>
        </div>
        <div className="my-2">
          <label htmlFor="dueDate">Due Date</label>
          <DatePicker style={{ width: "100%" }} onChange={onChange} />
          {formik.touched.dueDate && formik.errors.dueDate && (
            <div className="mt-1 text-sm text-danger">
              {formik.errors.dueDate}
            </div>
          )}
        </div>
      </Form>
    </Modal>
  );
}

export default AddTodoModal;
