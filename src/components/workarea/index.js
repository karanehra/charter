import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TreeNode from "../../shared/node/";
import { setActiveNodeAction } from "../../redux/actions/nodeActions";
import "./workarea.scss";

const WorkArea = () => {
  const [workSpaceHeight, changeHeight] = useState(window.innerHeight - 50);
  const [workSpaceWidth, changeWidth] = useState(window.innerWidth);
  let { nodes } = useSelector(state => ({ nodes: state.nodeReducer.nodes }));
  const dispatch = useDispatch();

  window.onresize = () => {
    changeHeight(window.innerHeight - 50);
    changeWidth(window.innerWidth);
  };

  const removeActiveNode = () => {
    dispatch(setActiveNodeAction(null));
  };

  return (
    <React.Fragment>
      <svg
        width={workSpaceWidth}
        height={workSpaceHeight}
        onClick={removeActiveNode}
        className="workarea"
      >
        {nodes.length > 0 &&
          nodes.map(node => (
            <TreeNode
              key={node.id}
              cx={node.cx}
              cy={node.cy}
              nodeId={node.id}
            />
          ))}
      </svg>
    </React.Fragment>
  );
};

export default WorkArea;
