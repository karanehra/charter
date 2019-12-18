import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  modifyNodeAction,
  setActiveNodeAction
} from "../../redux/actions/nodeActions";

const TreeNode = props => {
  const { nodeId } = props;
  let selectedNode = null;
  let dragStartX = "";
  let dragStartY = "";
  const dispatch = useDispatch();
  const { activeNodeID } = useSelector(state => ({
    activeNodeID: state.nodeReducer.activeNodeID
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
    const { connectionLines } = this.state;
    for (let i = 0; i < connectionLines.length; i++) {
      if (connectionLines[i].id1 === nodeID) {
        connectionLines[i] = {
          ...connectionLines[i],
          x1: document.getElementById(`node-${nodeID}`).getAttribute("cx"),
          y1: document.getElementById(`node-${nodeID}`).getAttribute("cy")
        };
      } else if (connectionLines[i].id2 === nodeID) {
        connectionLines[i] = {
          ...connectionLines[i],
          x2: document.getElementById(`node-${nodeID}`).getAttribute("cx"),
          y2: document.getElementById(`node-${nodeID}`).getAttribute("cy")
        };
      }
    }
    this.setState({ connectionLines });
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
