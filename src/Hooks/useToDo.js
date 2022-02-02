import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ERROR_MESSAGE } from "../utils/constant";

const useToDo = () => {
  const [loading, setLoading] = useState(false);

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
    alert("SCS");
    console.log(data);
  };

  return {
    loading,
    formik,
    setLoading,
  };
};

export default useToDo;
