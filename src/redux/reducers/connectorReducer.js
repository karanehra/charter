import { CREATE_CONNECTION } from "../../constants/actions";

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
    default:
      return state;
  }
};

export default connectorReducer;
