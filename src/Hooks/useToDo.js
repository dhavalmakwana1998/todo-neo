import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  ERROR_MESSAGE,
  API_ROUTE,
  API_URL,
  SUCCESS_MSG,
} from "../utils/constant";
import axios from "axios";
import { message } from "antd";

const useToDo = () => {
  const [loading, setLoading] = useState(false);

  async function createTask(payload) {
    setLoading(true);
    try {
      const response = await axios.post(
        `${API_URL}/${API_ROUTE.tasks}`,
        payload
      );
      if (response) {
        setLoading(false);
        message.success(SUCCESS_MSG.taskCreate);
      }
    } catch (error) {
      setLoading(false);
      message.error(ERROR_MESSAGE.somethingWentWrong);
    }
  }
  const formik = useFormik({
    initialValues: {
      task: "",
      priority: "",
      dueDate: "",
    },
    validationSchema: Yup.object().shape({
      task: Yup.string().required(ERROR_MESSAGE.taskRequired),
      dueDate: Yup.string().required(ERROR_MESSAGE.deadlineRequired),
      priority: Yup.string().required(ERROR_MESSAGE.priorityRequired),
    }),
    onSubmit: (values) => {
      submitData(values);
    },
  });

  const submitData = async (data) => {
    const payload = {
      id: Math.floor(Math.random() * 1000),
      task: data.task,
      priority: data.priority,
      dueDate: data.dueDate,
      stage: 0,
    };
    createTask(payload);
  };

  return {
    loading,
    formik,
    setLoading,
  };
};

export default useToDo;
