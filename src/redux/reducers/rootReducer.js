import { ADD_NODE } from "../../constants/actions";

const initialState = {
  nodes: []
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  const { nodes } = state;
  switch (type) {
    case ADD_NODE:
      nodes.push(payload);
      return {
        ...state,
        nodes
      };
    default:
      return state;
  }
};

export default rootReducer;
