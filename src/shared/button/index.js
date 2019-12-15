import React from "react";
import "./button.scss";

const Button = props => {
  const { color = "primary", children } = props;
  let newProps = Object.assign({}, props);
  newProps.color && delete newProps.color;
  return (
    <button className={`button ${color}`} {...newProps}>
      {children}
    </button>
  );
};

export default Button;
