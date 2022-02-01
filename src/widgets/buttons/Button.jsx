import React from "react";

const Button = ({ loading, type, title, className, ...other }) => {
  return (
    <button
      type={type ? type : "button"}
      className={`btn btn-primary ${className}`}
      {...other}
    >
      {loading && <div className="loading"></div>} {title}
    </button>
  );
};

export default Button;
