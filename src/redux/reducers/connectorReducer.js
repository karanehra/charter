import {
  CREATE_CONNECTION,
  UPDATE_NODE_CONNECTIONS
} from "../../constants/actions";

const initialState = {
  connections: []
};

const connectorReducer = (state = initialState, action) => {
  const { type, payload } = action;
  let { connections } = state;
  switch (type) {
    case CREATE_CONNECTION:
      connections.push(payload);
      return {
        ...state,
        connections
      };
    case UPDATE_NODE_CONNECTIONS:
      return {
        ...state,
        connections: payload
      };
    default:
      return state;
  }
};

export default connectorReducer;
