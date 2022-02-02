import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ERROR_MESSAGE } from "../../utils/constant";

const useRegister = () => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      userName: "",
      email: "",
      contact: "",
      password: "",
      confirmPassword: "",
      profile: "",
    },

    validationSchema: Yup.object().shape({
      userName: Yup.string().required(ERROR_MESSAGE.passRequired),
      fullName: Yup.string().required(ERROR_MESSAGE.passRequired),
      contact: Yup.string()
        .min(10, ERROR_MESSAGE.contacMinTen)
        .max(10, ERROR_MESSAGE.contacMinTen),
      email: Yup.string()
        .required(ERROR_MESSAGE.emailRequired)
        .email(ERROR_MESSAGE.email),
      password: Yup.string()
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{6,}$/,
          ERROR_MESSAGE.passwordValidation
        )
        .required(ERROR_MESSAGE.passRequired)
        .min(6, ERROR_MESSAGE.passwordMinSix),
      confirmPassword: Yup.string()
        .when("password", {
          is: (val) => (val && val.length > 0 ? true : false),
          then: Yup.string().oneOf(
            [Yup.ref("password")],
            ERROR_MESSAGE.passwordNotMatch
          ),
        })
        .required(ERROR_MESSAGE.passRequired),
    }),

    onSubmit: (values) => {
      submitData(values);
    },
  });

  const submitData = async (data) => {
    console.log(data);
  };

  return {
    loading,
    formik,
    setLoading,
  };
};

export default useRegister;
