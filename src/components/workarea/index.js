import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./workarea.scss";
import TreeNode from "../../shared/node/";

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
          nodes.map(node => (
            <TreeNode
              key={node.id}
              cx={node.cx}
              cy={node.cy}
              nodeId={node.id}
              r={30}
            />
          ))}
      </svg>
    </React.Fragment>
  );
};

export default WorkArea;
