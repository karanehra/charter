import * as React from "react";

export interface OutlinedTextInputProps {
  placeholder?: string;
  color?: "primary" | "secondary";
  name?: string;
  onChange: Function;
}

declare const OutlinedTextInput: React.FC<OutlinedTextInputProps>;
export default OutlinedTextInput;
