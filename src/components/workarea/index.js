import React, { useState } from "react";
import "./workarea.scss";

const WorkArea = () => {
  const [workSpaceHeight, changeHeight] = useState(window.innerHeight - 50);
  const [workSpaceWidth, changeWidth] = useState(window.innerWidth);

  window.onresize = () => {
    changeHeight(window.innerHeight - 50);
    changeWidth(window.innerWidth);
  };

  return (
    <svg
      width={workSpaceWidth}
      height={workSpaceHeight}
      className="workarea"
    ></svg>
  );
};

export default WorkArea;
