import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  modifyNodeAction,
  setActiveNodeAction
} from "../../redux/actions/nodeActions";
import { updateNodeConnectorsAction } from "../../redux/actions/connectorActions";

const TreeNode = props => {
  const { nodeId } = props;
  let selectedNode = null;
  let dragStartX = "";
  let dragStartY = "";
  const dispatch = useDispatch();
  const { activeNodeID, connections } = useSelector(state => ({
    activeNodeID: state.nodeReducer.activeNodeID,
    connections: state.connectorReducer.connections
  }));

  const onClickDown = event => {
    const { clientX, clientY, target } = event;
    dragStartX = clientX;
    dragStartY = clientY;
    selectedNode = target;
  };

  const onClickDrag = e => {
    if (selectedNode) {
      var dx =
        parseInt(selectedNode.getAttribute("cx")) + e.clientX - dragStartX;
      var dy =
        parseInt(selectedNode.getAttribute("cy")) + e.clientY - dragStartY;
      dragStartX = e.clientX;
      dragStartY = e.clientY;
      selectedNode.setAttribute("cx", dx);
      selectedNode.setAttribute("cy", dy);
      updateLines(nodeId);
    }
  };

  const onClickUp = () => {
    let newCx = selectedNode.getAttribute("cx");
    let newCy = selectedNode.getAttribute("cy");
    let payload = { cx: Number(newCx), cy: Number(newCy), id: nodeId };
    dispatch(modifyNodeAction(payload));
    selectedNode = null;
  };

  const setActiveNode = event => {
    event.stopPropagation();
    dispatch(setActiveNodeAction(nodeId));
  };

  const updateLines = nodeID => {
    let newConnections = Array.from(connections);
    if (newConnections.length) {
      for (let i = 0; i < newConnections.length; i++) {
        if (newConnections[i].id1 === nodeID) {
          newConnections[i] = {
            ...newConnections[i],
            x1: Number(selectedNode.getAttribute("cx")),
            y1: Number(selectedNode.getAttribute("cy"))
          };
        } else if (newConnections[i].id2 === nodeID) {
          newConnections[i] = {
            ...newConnections[i],
            x2: Number(selectedNode.getAttribute("cx")),
            y2: Number(selectedNode.getAttribute("cy"))
          };
        }
      }
      dispatch(updateNodeConnectorsAction(newConnections));
    }
  };

  let newProps = Object.assign({}, props);
  newProps.nodeId && delete newProps.nodeId;

  return (
    <circle
      className="tree-node"
      onMouseDown={onClickDown}
      onMouseMove={onClickDrag}
      onMouseUp={onClickUp}
      onClick={setActiveNode}
      r={activeNodeID === nodeId ? 50 : 30}
      fill={activeNodeID === nodeId ? "lightblue" : "white"}
      strokeWidth="3"
      stroke={"black"}
      {...newProps}
    ></circle>
  );
};

export default TreeNode;
