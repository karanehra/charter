import * as React from "react";

export interface TreeNodeProps {
  cx: number;
  cy: number;
  r: number;
  color?: "primary" | "secondary";
  name?: string;
  selected?: boolean;
}

declare const TreeNode: React.FC<TreeNodeProps>;
export default TreeNode;
