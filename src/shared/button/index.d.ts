import * as React from "react";

export interface ButtonProps {
  color?: "primary" | "secondary";
  name?: string;
  onClick?: Function;
  disabled?: boolean;
}

declare const Button: React.FC<ButtonProps>;
export default Button;
