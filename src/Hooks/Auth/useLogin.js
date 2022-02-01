import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ERROR_MESSAGE } from "../../utils/constant";

const useLogin = () => {
  const [loading, setLoading] = useState(false);

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
    alert("SCS");
    console.log(data);
  };

  return {
    loading,
    formik,
  };
};

export default useLogin;
