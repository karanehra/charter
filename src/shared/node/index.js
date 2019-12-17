import React from "react";
import { useDispatch } from "react-redux";
import { modifyNodeAction } from "../../redux/actions/nodeActions";

const TreeNode = props => {
  const { nodeId } = props;
  let selectedNode = null;
  let dragStartX = "";
  let dragStartY = "";
  const dispatch = useDispatch();

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
    }
  };

  const onClickUp = () => {
    let newCx = selectedNode.getAttribute("cx");
    let newCy = selectedNode.getAttribute("cy");
    let payload = { cx: newCx, cy: newCy, id: nodeId };
    dispatch(modifyNodeAction(payload));
    selectedNode = null;
  };

  let newProps = Object.assign({}, props);
  newProps.nodeId && delete newProps.nodeId;

  return (
    <circle
      className="tree-node"
      onMouseDown={onClickDown}
      onMouseMove={onClickDrag}
      onMouseUp={onClickUp}
      r={50}
      fill="lightblue"
      strokeWidth="3"
      stroke={"black"}
      {...newProps}
    ></circle>
  );
};

export default TreeNode;
