import React from "react";

const Input = ({ classes, inputType, placeHolder }) => {
  return (
    <input className={classes} type={inputType} placeHolder={placeHolder} />
  );
};

export default Input;
