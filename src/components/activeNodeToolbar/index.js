import React from "react";
import { useSelector } from "react-redux";
import "./activeNodeToolbar.scss";

const ActiveNodeToolbar = () => {
  const { activeNodeID } = useSelector(state => ({
    activeNodeID: state.nodeReducer.activeNodeID
  }));

  return (
    <div className="active-node-toolbar-wrapper">
      <div className="active-node">
        Active Node: <b>{activeNodeID}</b>
      </div>
    </div>
  );
};

export default ActiveNodeToolbar;
