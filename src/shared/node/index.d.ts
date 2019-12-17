import * as React from "react";

export interface TreeNodeProps {
  cx: number;
  cy: number;
  color?: "primary" | "secondary";
  name?: string;
  selected?: boolean;
  nodeId: string;
}

declare const TreeNode: React.FC<TreeNodeProps>;
export default TreeNode;
