import { Modal, Form, Select, DatePicker, Label } from "antd";
import React from "react";
import CommonInput from "../../widgets/Inputs/CommonInput";

const { Option } = Select;
function AddTodoModal({ visible, handleCancel, handleOk, confirmLoading }) {
  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  return (
    <Modal
      title="Add ToDo"
      visible={visible}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      <Form>
        <div className="my-2">
          <label>Task</label>
          <CommonInput type="text" placeholder="Todo" />
        </div>
        <div className="row my-2">
          <div className="col-12 col-md-6">
            <label>Stage</label>
            <Select defaultValue="Backlog" style={{ width: "100%" }} disabled>
              <Option value="0">Backlog</Option>
            </Select>
          </div>
          <div className="col-12 col-md-6">
            <label>Priority</label>
            <Select defaultValue="High" style={{ width: "100%" }}>
              <Option value="0">High</Option>
              <Option value="1">Medium</Option>
              <Option value="2">Low</Option>
            </Select>
          </div>
        </div>
        <div className="my-2">
          <label>Due Date</label>
          <DatePicker style={{ width: "100%" }} onChange={onChange} />
        </div>
      </Form>
    </Modal>
  );
}

export default AddTodoModal;
