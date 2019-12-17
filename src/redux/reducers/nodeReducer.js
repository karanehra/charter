import { ADD_NODE, REMOVE_NODE, MODIFY_NODE } from "../../constants/actions";

const initialState = {
  nodes: []
};

const modifyNodeById = (payload, state) => {
  let { nodes } = state;
  let index = nodes.findIndex(val => val.id === payload.id);
  if (index >= 0) {
    nodes[index] = {
      ...nodes[index],
      ...payload
    };
  }
  return nodes;
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  let { nodes } = state;
  switch (type) {
    case ADD_NODE:
      nodes.push(payload);
      return {
        ...state,
        nodes
      };
    case REMOVE_NODE:
      nodes = nodes.filter(node => node.id !== payload);
      return {
        ...state,
        nodes
      };
    case MODIFY_NODE:
      return {
        ...state,
        nodes: modifyNodeById(payload, state)
      };
    default:
      return state;
  }
};

export default rootReducer;
