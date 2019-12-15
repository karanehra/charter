import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./workarea.scss";
import WorkNode from "../../shared/node/";

const WorkArea = () => {
  const [workSpaceHeight, changeHeight] = useState(window.innerHeight - 50);
  const [workSpaceWidth, changeWidth] = useState(window.innerWidth);
  let { nodes } = useSelector(state => ({ nodes: state.nodeReducer.nodes }));

  window.onresize = () => {
    changeHeight(window.innerHeight - 50);
    changeWidth(window.innerWidth);
  };

  return (
    <React.Fragment>
      <svg width={workSpaceWidth} height={workSpaceHeight} className="workarea">
        {nodes.length > 0 &&
          nodes.map((node, i) => (
            <WorkNode
              key={i}
              cx={workSpaceWidth / 2}
              cy={workSpaceHeight / 2}
              r={20}
            />
          ))}
      </svg>
    </React.Fragment>
  );
};

export default WorkArea;
