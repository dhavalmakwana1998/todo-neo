import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  ERROR_MESSAGE,
  API_ROUTE,
  API_URL,
  SUCCESS_MSG,
  TASK_STATUS,
  TASK_NAME,
} from "../utils/constant";
import axios from "axios";
import { message } from "antd";
import moment from "moment";

const useToDo = () => {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isTaskRender, setisTaskRender] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const generateLists = async () => {
    return await axios.get(`${API_URL}/${API_ROUTE.tasks}`).then((res) =>
      TASK_STATUS.reduce(
        (acc, listKey) => ({
          ...acc,
          [listKey]: res.data?.filter(
            (task) => task.stage === TASK_NAME[listKey]
          ),
        }),
        {}
      )
    );
  };

  const [elements, setElements] = useState(generateLists().then((res) => res));
  useEffect(() => {
    generateLists().then((res) => setElements(res));
  }, []);

  useEffect(() => {
    generateLists().then((res) => setElements(res));
  }, [visible]);

  const showModal = () => {
    setIsEdit(false);
    formik.resetForm();
    setVisible(true);
  };

  const showEditModal = (item) => {
    setIsEdit(true);
    formik.setValues({
      task: item.task,
      priority: item.priority,
      dueDate: moment(item.dueDate),
      stage: item.stage,
      id: item.id,
    });
    setVisible(true);
  };

  const handleOk = () => {
    formik.handleSubmit();
  };
  const handleCancel = () => {
    setVisible(false);
    setIsEdit(false);
    formik.resetForm();
  };

  const confirmDelete = async (id) => {
    await axios.delete(`${API_URL}/${API_ROUTE.tasks}/${id}`).then((res) => {
      setisTaskRender(!isTaskRender);
      generateLists().then((res) => setElements(res));
      message.success(SUCCESS_MSG.taskDelete);
    });
  };

  const cancelDelete = (e) => {
    console.log(e);
    message.error("Click on No");
  };

  async function createTask(payload) {
    setLoading(true);
    try {
      const response = await axios.post(
        `${API_URL}/${API_ROUTE.tasks}`,
        payload
      );
      if (response) {
        setLoading(false);
        setVisible(false);
        formik.setValues({
          task: "",
          dueDate: "",
          priority: "",
        });
        message.success(SUCCESS_MSG.taskCreate);
      }
    } catch (error) {
      setLoading(false);
      message.error(ERROR_MESSAGE.somethingWentWrong);
    }
  }
  async function updateTask(payload) {
    setLoading(true);
    try {
      const response = await axios.put(
        `${API_URL}/${API_ROUTE.tasks}/${payload.id}`,
        payload
      );
      if (response) {
        setLoading(false);
        setVisible(false);
        setIsEdit(false);
        setisTaskRender(!isTaskRender);
        generateLists().then((res) => setElements(res));
        formik.setValues({
          task: "",
          dueDate: "",
          priority: "",
        });
        message.success(SUCCESS_MSG.taskUpdate);
      }
    } catch (error) {
      setLoading(false);
      setIsEdit(false);
      message.error(ERROR_MESSAGE.somethingWentWrong);
    }
  }
  const stageBack = async (id, payload) => {
    try {
      const response = await axios.put(`${API_URL}/${API_ROUTE.tasks}/${id}`, {
        ...payload,
        stage: payload.stage - 1,
      });
      if (response) {
        setisTaskRender(!isTaskRender);
        generateLists().then((res) => setElements(res));
        message.success(SUCCESS_MSG.taskUpdate);
      }
    } catch (error) {
      message.error(ERROR_MESSAGE.somethingWentWrong);
    }
  };
  const stageForward = async (id, payload) => {
    try {
      const response = await axios.put(`${API_URL}/${API_ROUTE.tasks}/${id}`, {
        ...payload,
        stage: payload.stage + 1,
      });
      if (response) {
        setisTaskRender(!isTaskRender);
        generateLists().then((res) => setElements(res));
        message.success(SUCCESS_MSG.taskUpdate);
      }
    } catch (error) {
      message.error(ERROR_MESSAGE.somethingWentWrong);
    }
  };

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
      id: isEdit ? data.id : Math.floor(Math.random() * 1000),
      task: data.task,
      priority: data.priority,
      dueDate: isEdit
        ? moment(data.dueDate).format("YYYY-MM-DD")
        : data.dueDate,
      stage: isEdit ? data.stage : 0,
    };
    if (isEdit) {
      updateTask(payload);
    } else {
      createTask(payload);
    }
  };

  return {
    loading,
    formik,
    setLoading,
    visible,
    setVisible,
    showModal,
    handleCancel,
    handleOk,
    showEditModal,
    elements,
    setElements,
    generateLists,
    isTaskRender,
    setisTaskRender,
    confirmDelete,
    cancelDelete,
    isEdit,
    stageBack,
    stageForward,
  };
};

export default useToDo;
