import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TreeNode from "../../shared/node/";
import { setActiveNodeAction } from "../../redux/actions/nodeActions";
import Connector from "../../shared/connector/";
import { updateNodeConnectorsAction } from "../../redux/actions/connectorActions";
import "./workarea.scss";

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

  const handlePositionUpdate = (nodeID, cx, cy) => {
    console.log("Getting position update");
    if (connections.length) {
      for (let i = 0; i < connections.length; i++) {
        if (connections[i].id1 === nodeID) {
          connections[i] = {
            ...connections[i],
            x1: Number(cx),
            y1: Number(cy)
          };
        } else if (connections[i].id2 === nodeID) {
          connections[i] = {
            ...connections[i],
            x2: Number(cx),
            y2: Number(cy)
          };
        }
      }
    }
  };

  return (
    <React.Fragment>
      <svg
        width={workSpaceWidth}
        height={workSpaceHeight}
        onClick={removeActiveNode}
        className="workarea"
      >
        {connections.length > 0 &&
          connections.map((connection, i) => (
            <Connector {...connection} key={i} />
          ))}
        {nodes.length > 0 &&
          nodes.map(node => (
            <TreeNode
              key={node.id}
              cx={node.cx}
              cy={node.cy}
              nodeId={node.id}
              onPositionUpdate={handlePositionUpdate}
            />
          ))}
      </svg>
    </React.Fragment>
  );
};

export default WorkArea;
