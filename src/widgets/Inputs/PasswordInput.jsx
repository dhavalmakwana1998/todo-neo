import React, { useState } from "react";
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";

const PasswordInput = (
  {
    label,
    isRequired,
    inputType,
    inputName,
    inputId,
    inputPlaceholder,
    className,
    isEye,
    ...other
  },
  ref
) => {
  const [eye, setEye] = useState(false);

  const changePasswordType = () => {
    setEye(!eye);
  };
  return (
    <>
      <label htmlFor={inputName}>
        {label}
        {isRequired && <span className="text-danger">*</span>}
      </label>
      <Input
        ref={ref}
        type={!eye ? "password" : "text"}
        name={inputName}
        id={inputId}
        placeholder={inputPlaceholder}
        className={className}
        {...other}
      />
      {isEye && (
        <span className="inputIcon" onClick={changePasswordType}>
          {eye ? <EyeOutlined /> : <EyeInvisibleOutlined />}
        </span>
      )}
    </>
  );
};

export default React.forwardRef(PasswordInput);
