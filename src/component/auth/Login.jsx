import React from "react";
import { Form } from "antd";
import { Link } from "react-router-dom";
import routes from "../../utils/routes";
import CommonInput from "../../widgets/Inputs/CommonInput";
import PasswordInput from "../../widgets/Inputs/PasswordInput";

function Login() {
  const onFinish = () => {
    alert();
  };
  return (
    <div className="auth-wrapper">
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <span>LOGIN </span>
          </div>
          <Form action="#">
            <div className="row">
              <CommonInput type="text" placeholder="Email or Phone" />
            </div>
            <div className="row">
              <PasswordInput isEye={true} placeholder="Password" />
            </div>
            <div className="pass">{/* <a href="#">Forgot password?</a> */}</div>
            <div className="row button">
              <CommonInput type="submit" value="Login" />
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
