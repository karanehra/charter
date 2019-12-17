import * as React from "react";

export interface ConnectorProps {
  x1: string;
  y1: string;
  x2: string;
  y2: string;
}

declare const Connector: React.FC<ConnectorProps>;
export default Connector;
