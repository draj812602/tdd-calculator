import React from "react";

const Button = ({ BtnType, BtnClasses, BtnName, onClick }) => {
  return (
    <button type={BtnType} className={BtnClasses} onClick={onClick}>
      {BtnName}
    </button>
  );
};

export default Button;
