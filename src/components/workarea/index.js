import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./workarea.scss";

const WorkArea = () => {
  const [workSpaceHeight, changeHeight] = useState(window.innerHeight - 50);
  const [workSpaceWidth, changeWidth] = useState(window.innerWidth);
  const data = useSelector(state => state.rootReducer.nodes);
  window.onresize = () => {
    changeHeight(window.innerHeight - 50);
    changeWidth(window.innerWidth);
  };

  return (
    <React.Fragment>
      {data.length > 0 ? (
        <svg
          width={workSpaceWidth}
          height={workSpaceHeight}
          className="workarea"
        ></svg>
      ) : (
        <div>NoData</div>
      )}
    </React.Fragment>
  );
};

export default WorkArea;
