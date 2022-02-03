import React, { useEffect } from "react";
import { Input } from "antd";

const NumberInput = ({
  label,
  inputType,
  isRequired,
  inputName,
  inputId,
  inputPlaceholder,
  className,
  type,
  ...other
}) => {
  useEffect(() => {
    document
      .querySelector(".disallow")
      .addEventListener("keypress", function (evt) {
        if (
          (evt.which !== 8 && evt.which !== 0 && evt.which < 48) ||
          evt.which > 57
        ) {
          evt.preventDefault();
        }
      });
  }, []);

  return (
    <>
      <label htmlFor={inputName}>
        {label}
        {isRequired && <span className="text-danger">*</span>}
      </label>
      <Input
        type={"text"}
        name={inputName}
        id={inputId}
        placeholder={inputPlaceholder}
        className={`disallow ${className}`}
        {...other}
      />
    </>
  );
};

export default React.forwardRef(NumberInput);
