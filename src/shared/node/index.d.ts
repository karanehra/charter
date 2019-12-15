import * as React from "react";

export interface WorkNodeProps {
  cx: number;
  cy: number;
  r: number;
  color?: "primary" | "secondary";
  name?: string;
  selected?: boolean;
}

declare const WorkNode: React.FC<WorkNodeProps>;
export default WorkNode;
