import React, { useState } from "react";
import OutlinedTextInput from "../../shared/input";

const HeaderToolbar = () => {
  const [newNodeTitle, changeNewNodeTitle] = useState("");
  return (
    <div>
      <OutlinedTextInput
        placeholder="Hello"
        name="something"
        onChange={event => changeNewNodeTitle(event.target.value)}
        color="primary"
        value={newNodeTitle}
      />
    </div>
  );
};

export default HeaderToolbar;
