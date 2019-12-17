import React, { useState } from "react";
import OutlinedTextInput from "../../shared/input";
import Button from "../../shared/button";
import { useDispatch } from "react-redux";
import { addNodeAction } from "../../redux/actions/nodeActions";
import { getUUID } from "../../utils/helpers";

const HeaderToolbar = () => {
  const [newNodeTitle, changeNewNodeTitle] = useState("");
  const dispatch = useDispatch();

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
    </React.Fragment>
  );
};

export default HeaderToolbar;
