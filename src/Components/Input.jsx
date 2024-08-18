import React from "react";

const Input = ({ classes, inputType, placeHolder, onChange }) => {
  return (
    <input
      className={classes}
      type={inputType}
      placeholder={placeHolder}
      onChange={onChange}
    />
  );
};

export default Input;
