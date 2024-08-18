import React from "react";

const Button = ({ BtnType, BtnClasses, BtnName }) => {
  return (
    <button type={BtnType} className={BtnClasses}>
      {BtnName}
    </button>
  );
};

export default Button;
