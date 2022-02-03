import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ERROR_MESSAGE, API_ROUTE, API_URL } from "../../utils/constant";
import axios from "axios";
import { message } from "antd";
import routes from "../../utils/routes";
import { useNavigate } from "react-router-dom";

const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const getUser = async () => {
    const res = await axios.get(`${API_URL}/${API_ROUTE.user}`);
    setUsers(...users, res.data);
  };
  useEffect(() => {
    getUser();
  }, []);

  async function createUser(payload) {
    setLoading(true);
    try {
      const response = await axios.post(
        `${API_URL}/${API_ROUTE.user}`,
        payload
      );
      if (response) {
        setLoading(false);
        navigate(routes.login);
        message.success("User created sucessfully");
      }
    } catch (error) {
      setLoading(false);
      message.error("Somthing went wrong");
      console.error(error);
    }
  }

  const formik = useFormik({
    initialValues: {
      fullName: "",
      userName: "",
      email: "",
      contact: "",
      password: "",
      profile: "",
    },

    validationSchema: Yup.object().shape({
      userName: Yup.string()
        .matches(/^[a-zA-Z0-9]*$/, ERROR_MESSAGE.spaceValidation)
        .required(ERROR_MESSAGE.userName)
        .test("unique", ERROR_MESSAGE.userNameExist, async (list) => {
          return !Boolean(users.find((elem) => elem.userName === list));
        }),
      fullName: Yup.string().required(ERROR_MESSAGE.fullName),
      contact: Yup.string()
        .min(10, ERROR_MESSAGE.contacMinTen)
        .max(10, ERROR_MESSAGE.contacMinTen)
        .matches(/^[a-zA-Z0-9]*$/, ERROR_MESSAGE.spaceValidation)
        .test("unique", ERROR_MESSAGE.contactExist, async (list) => {
          return !Boolean(users.find((elem) => elem.contact === list));
        }),
      email: Yup.string()
        .required(ERROR_MESSAGE.emailRequired)
        .email(ERROR_MESSAGE.email)
        .test("unique", ERROR_MESSAGE.emailExist, async (list) => {
          return !Boolean(users.find((elem) => elem.email === list));
        }),
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
        .required(ERROR_MESSAGE.confirmPassRequired),
    }),

    onSubmit: (values) => {
      submitData(values);
    },
  });

  const submitData = async (data) => {
    const payload = {
      id: Math.floor(Math.random() * 1000),
      contact: data.contact,
      email: data.email,
      fullName: data.fullName,
      password: data.password,
      profile: data.profile || "",
      userName: data.userName,
    };
    createUser(payload);
  };

  return {
    loading,
    formik,
    setLoading,
  };
};

export default useRegister;
