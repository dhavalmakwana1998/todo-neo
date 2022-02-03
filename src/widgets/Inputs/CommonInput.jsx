import React from "react";
import { Input } from "antd";

const CommonInput = (
  {
    label,
    isRequired,
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
      <label htmlFor={inputName}>
        {label}
        {isRequired && <span className="text-danger">*</span>}
      </label>
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
