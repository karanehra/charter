import React, { useState } from "react";
import OutlinedTextInput from "../../shared/input";
import Button from "../../shared/button";

const HeaderToolbar = () => {
  const [newNodeTitle, changeNewNodeTitle] = useState("");

  const handleNodeAdditon = event => {
    console.log(event);
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
