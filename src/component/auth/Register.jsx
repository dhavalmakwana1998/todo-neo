import React, { createRef, useEffect } from "react";
import { Form } from "antd";
import { Link } from "react-router-dom";
import routes from "../../utils/routes";
import CommonInput from "../../widgets/Inputs/CommonInput";
import NumberInput from "../../widgets/Inputs/NumberInput";
import PasswordInput from "../../widgets/Inputs/PasswordInput";
import ImageUploader from "../../widgets/Inputs/ImageUploader";
import useRegister from "../../Hooks/Auth/useRegister";
import Button from "../../widgets/buttons/Button";

function Register() {
  const { loading, formik } = useRegister();
  const inputElement = createRef();

  useEffect(() => {
    inputElement?.current?.focus();
  }, []);

  return (
    <div className="auth-wrapper">
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <span>REGISTER </span>
          </div>
          <Form
            onSubmit={formik.handleSubmit}
            onKeyDown={(e) => {
              if ((e.key === "Enter" || e.key === "NumpadEnter") && !loading) {
                formik.handleSubmit();
              }
            }}
          >
            <div className="row input-row">
              <div className="col-12 col-md-6 mb-2">
                <CommonInput
                  ref={inputElement}
                  label="Full Name"
                  type="text"
                  placeholder="Full Name"
                  inputName="fullName"
                  inputId="fullName"
                  {...formik.getFieldProps("fullName")}
                />
                {formik.touched.fullName && formik.errors.fullName && (
                  <div className="text-danger">{formik.errors.fullName}</div>
                )}
              </div>
              <div className="col-12 col-md-6 mb-2">
                <CommonInput
                  label="Username"
                  type="text"
                  placeholder="Username"
                  inputName="userName"
                  inputId="userName"
                  {...formik.getFieldProps("userName")}
                />
                {formik.touched.userName && formik.errors.userName && (
                  <div className="text-danger">{formik.errors.userName}</div>
                )}
              </div>
            </div>

            <div className="row input-row">
              <div className="col-12 col-md-6 mb-2">
                <CommonInput
                  label="Email"
                  type="email"
                  placeholder="Email"
                  inputName="email"
                  inputId="email"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-danger">{formik.errors.email}</div>
                )}
              </div>
              <div className="col-12 col-md-6 mb-2">
                <NumberInput
                  label="Contact Number"
                  placeholder="Contact Number"
                  inputName="contact"
                  inputId="contact"
                  {...formik.getFieldProps("contact")}
                />
                {formik.touched.contact && formik.errors.contact && (
                  <div className="text-danger">{formik.errors.contact}</div>
                )}
              </div>
            </div>

            <div className="row input-row">
              <div className="col-12 col-md-6 mb-2 position-relative">
                <PasswordInput
                  label="Password"
                  isEye={true}
                  placeholder="Password"
                  inputName="password"
                  inputId="password"
                  {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password && (
                  <div className="text-danger">{formik.errors.password}</div>
                )}
              </div>
              <div className="col-12 col-md-6 mb-2">
                <PasswordInput
                  label="Confirm Password"
                  placeholder="Confirm Password"
                  inputName="confirmPassword"
                  inputId="confirmPassword"
                  {...formik.getFieldProps("confirmPassword")}
                />
                {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword && (
                    <div className="text-danger">
                      {formik.errors.confirmPassword}
                    </div>
                  )}
              </div>
            </div>

            <div className="input-row" style={{ height: "120px" }}>
              <ImageUploader />
            </div>
            <div className="row button">
              <Button
                onClick={formik.handleSubmit}
                disabled={loading}
                loading={loading}
                type="submit"
                className="w-full mt-6"
                title="Signup"
              />
            </div>
            <div className="signup-link">
              Already member? <Link to={routes.login}>Login</Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Register;
