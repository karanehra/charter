import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../shared/button";
import {
  removeNodeAction,
  addNodeAction
} from "../../redux/actions/nodeActions";
import "./activeNodeToolbar.scss";
import { getUUID } from "../../utils/helpers";
import { createConnectorAction } from "../../redux/actions/connectorActions";

const ActiveNodeToolbar = () => {
  const dispatch = useDispatch();
  const { activeNodeID, nodes } = useSelector(state => ({
    activeNodeID: state.nodeReducer.activeNodeID,
    nodes: state.nodeReducer.nodes
  }));

  const activeNode = nodes.filter(node => node.id === activeNodeID)[0];

  const handleDeleteNode = () => {
    dispatch(removeNodeAction(activeNodeID));
  };

  const handleAddChild = () => {
    let childNode = {
      title: "Child",
      id: getUUID(10),
      cx: window.innerWidth / 2,
      cy: window.innerHeight / 2
    };
    dispatch(addNodeAction(childNode));
    let connection = {
      x1: activeNode.cx,
      y1: activeNode.cy,
      x2: window.innerWidth / 2,
      y2: window.innerHeight / 2
    };
    dispatch(createConnectorAction(connection));
  };

  return (
    <div className="active-node-toolbar-wrapper">
      <div className="active-node">
        Active Node: <b>{activeNodeID}</b>
      </div>
      <Button color="secondary" onClick={handleDeleteNode}>
        Delete
      </Button>
      <Button color="secondary" onClick={handleAddChild}>
        Add Child
      </Button>
    </div>
  );
};

export default ActiveNodeToolbar;
