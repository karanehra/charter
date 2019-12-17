import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TreeNode from "../../shared/node/";
import { setActiveNodeAction } from "../../redux/actions/nodeActions";
import "./workarea.scss";
import Connector from "../../shared/connector/";

const WorkArea = () => {
  const [workSpaceHeight, changeHeight] = useState(window.innerHeight - 50);
  const [workSpaceWidth, changeWidth] = useState(window.innerWidth);
  let { nodes, connections } = useSelector(state => ({
    nodes: state.nodeReducer.nodes,
    connections: state.connectorReducer.connections
  }));
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
        {connections.length > 0 &&
          connections.map((connection, i) => (
            <Connector {...connection} key={i} />
          ))}
      </svg>
    </React.Fragment>
  );
};

export default WorkArea;
