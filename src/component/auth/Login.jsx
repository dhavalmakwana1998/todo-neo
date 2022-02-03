import React, { createRef, useEffect } from "react";
import { Form } from "antd";
import { Link, useNavigate } from "react-router-dom";
import routes from "../../utils/routes";
import CommonInput from "../../widgets/Inputs/CommonInput";
import PasswordInput from "../../widgets/Inputs/PasswordInput";
import useLogin from "../../Hooks/Auth/useLogin";
import Button from "../../widgets/buttons/Button";
import { useStore } from "../../Store/Store";

function Login() {
  const { token } = useStore();
  const { loading, formik } = useLogin();
  const history = useNavigate();
  const inputElement = createRef();

  useEffect(() => {
    if (token) {
      history(routes.dashboard);
    }
    inputElement?.current?.focus();
  }, []);

  return (
    <div className="auth-wrapper">
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <span>LOGIN </span>
          </div>
          <Form
            onSubmit={formik.handleSubmit}
            onKeyDown={(e) => {
              if ((e.key === "Enter" || e.key === "NumpadEnter") && !loading) {
                formik.handleSubmit();
              }
            }}
          >
            <div className="input-row mb-2">
              <CommonInput
                ref={inputElement}
                type="text"
                isRequired={true}
                placeholder="john@gmail.com / john123"
                label="Email"
                inputName="email"
                inputId="email"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="mt-1 text-sm text-danger">
                  {formik.errors.email}
                </div>
              )}
            </div>
            <div className="input-row mb-2">
              <PasswordInput
                label="Password"
                isRequired={true}
                isEye={true}
                placeholder="Password"
                inputName="password"
                inputId="password"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password && (
                <div className="mt-1 text-sm text-danger">
                  {formik.errors.password}
                </div>
              )}
            </div>
            <div className="pass">{/* <a href="#">Forgot password?</a> */}</div>
            <div className="row button">
              <Button
                onClick={formik.handleSubmit}
                disabled={loading}
                loading={loading}
                className="w-full mt-6"
                title="Log In"
              />
            </div>
            <div className="signup-link">
              Not a member? <Link to={routes.register}>Signup now</Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
