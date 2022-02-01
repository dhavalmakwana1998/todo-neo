import React from "react";
import { Form } from "antd";
import { Link } from "react-router-dom";
import routes from "../../utils/routes";
import CommonInput from "../../widgets/Inputs/CommonInput";
import NumberInput from "../../widgets/Inputs/NumberInput";
import PasswordInput from "../../widgets/Inputs/PasswordInput";
import ImageUploader from "../../widgets/Inputs/ImageUploader";

function Register() {
  return (
    <div className="auth-wrapper">
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <span>REGISTER </span>
          </div>
          <Form action="#">
            <div className="row">
              <CommonInput type="text" placeholder="Full Name" />
            </div>
            <div className="row">
              <CommonInput type="text" placeholder="Username" />
            </div>
            <div className="row">
              <CommonInput type="email" placeholder="Email" />
            </div>
            <div className="row">
              <NumberInput placeholder="Contact Number" />
            </div>
            <div className="row">
              <CommonInput type="text" placeholder="Email" />
            </div>
            <div className="row">
              <PasswordInput isEye={true} placeholder="Password" />
            </div>
            <div className="row">
              <PasswordInput placeholder="Confirm Password" />
            </div>
            <div className="row" style={{ height: "100px" }}>
              <ImageUploader />
            </div>
            <div className="row button">
              <CommonInput type="submit" value="Login" />
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
