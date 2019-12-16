import React from "react";
import { useDispatch } from "react-redux";

const TreeNode = props => {
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
    selectedNode = null;
  };

  return (
    <circle
      onMouseDown={onClickDown}
      onMouseMove={onClickDrag}
      onMouseUp={onClickUp}
      r={50}
      fill="lightblue"
      strokeWidth="3"
      stroke={"black"}
      {...props}
    >
      <div>Hello</div>
    </circle>
  );
};

export default TreeNode;
