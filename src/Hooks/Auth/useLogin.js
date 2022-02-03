import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ERROR_MESSAGE, API_URL, API_ROUTE } from "../../utils/constant";
import axios from "axios";
import { useStore } from "../../Store/Store";
import { message } from "antd";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setToken, setCurrentUser } = useStore();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required(ERROR_MESSAGE.emailRequired)
        .email(ERROR_MESSAGE.email),
      password: Yup.string()
        .required(ERROR_MESSAGE.passRequired)
        .min(6, ERROR_MESSAGE.passwordMinSix),
    }),
    onSubmit: (values) => {
      submitData(values);
    },
  });

  const submitData = async (data) => {
    setLoading(true);
    const res = await axios.get(`${API_URL}/${API_ROUTE.user}`);
    if (
      res.data.find(
        (elem) =>
          (elem.userName === data.userName || elem.email === data.email) &&
          elem.password === data.password
      )
    ) {
      setLoading(false);
      setToken(true);
      setCurrentUser(
        res.data.find(
          (elem) =>
            (elem.userName === data.userName || elem.email === data.email) &&
            elem.password === data.password
        )
      );
      message.success(ERROR_MESSAGE.loginSuccess);
    } else {
      message.error(ERROR_MESSAGE.InvalidCredential);
      setLoading(false);
      setToken(false);
    }
  };

  return {
    loading,
    formik,
    setLoading,
  };
};

export default useLogin;
