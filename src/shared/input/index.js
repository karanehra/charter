import React from "react";
import "./input.scss";

const OutlinedTextInput = props => {
  const { color = "primary" } = props;
  let newProps = Object.assign({}, props);
  newProps.color && delete newProps.color;
  return <input type="text" className={`input ${color}`} {...newProps} />;
};

export default OutlinedTextInput;
