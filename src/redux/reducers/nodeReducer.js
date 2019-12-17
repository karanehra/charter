import {
  ADD_NODE,
  REMOVE_NODE,
  MODIFY_NODE,
  SET_ACTIVE_NODE
} from "../../constants/actions";

const initialState = {
  nodes: [],
  activeNodeID: null
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
        nodes,
        activeNodeID: null
      };
    case MODIFY_NODE:
      return {
        ...state,
        nodes: modifyNodeById(payload, state)
      };
    case SET_ACTIVE_NODE:
      return {
        ...state,
        activeNodeID: payload
      };
    default:
      return state;
  }
};

export default rootReducer;
