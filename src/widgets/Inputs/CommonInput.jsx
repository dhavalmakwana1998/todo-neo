import React from "react";
import { Input } from "antd";

const CommonInput = (
  {
    label,
    inputType,
    inputName,
    inputId,
    inputPlaceholder,
    className,
    inputValue,
    ...other
  },
  ref
) => {
  return (
    <>
      <label htmlFor={inputName}>{label}</label>
      <Input
        ref={ref}
        type={inputType}
        name={inputName}
        id={inputId}
        value={inputValue}
        placeholder={inputPlaceholder}
        className={className}
        {...other}
      />
    </>
  );
};

export default React.forwardRef(CommonInput);
