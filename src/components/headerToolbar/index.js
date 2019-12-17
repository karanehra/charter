import React, { useState } from "react";
import OutlinedTextInput from "../../shared/input";
import Button from "../../shared/button";
import { useDispatch, useSelector } from "react-redux";
import { addNodeAction } from "../../redux/actions/nodeActions";
import { getUUID } from "../../utils/helpers";
import ActiveNodeToolbar from "../activeNodeToolbar";

const HeaderToolbar = () => {
  const [newNodeTitle, changeNewNodeTitle] = useState("");
  const dispatch = useDispatch();
  const { activeNodeID } = useSelector(state => ({
    activeNodeID: state.nodeReducer.activeNodeID
  }));

  const handleNodeAdditon = () => {
    dispatch(
      addNodeAction({
        title: newNodeTitle,
        id: getUUID(10),
        cx: window.innerWidth / 2,
        cy: window.innerHeight / 2
      })
    );
  };

  return (
    <React.Fragment>
      <div>
        <OutlinedTextInput
          placeholder="Enter Node Title"
          name="something"
          onChange={({ target: { value } }) => changeNewNodeTitle(value)}
          color="primary"
          value={newNodeTitle}
        />
      </div>
      <div>
        <Button
          color="secondary"
          onClick={handleNodeAdditon}
          disabled={!newNodeTitle}
        >
          Add
        </Button>
      </div>
      {activeNodeID && <ActiveNodeToolbar />}
    </React.Fragment>
  );
};

export default HeaderToolbar;
