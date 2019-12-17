import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../shared/button";
import { removeNodeAction } from "../../redux/actions/nodeActions";
import "./activeNodeToolbar.scss";

const ActiveNodeToolbar = () => {
  const dispatch = useDispatch();
  const { activeNodeID } = useSelector(state => ({
    activeNodeID: state.nodeReducer.activeNodeID
  }));

  const handleDeleteNode = () => {
    dispatch(removeNodeAction(activeNodeID));
  };

  return (
    <div className="active-node-toolbar-wrapper">
      <div className="active-node">
        Active Node: <b>{activeNodeID}</b>
      </div>
      <Button color="secondary" onClick={handleDeleteNode}>
        Delete
      </Button>
    </div>
  );
};

export default ActiveNodeToolbar;
