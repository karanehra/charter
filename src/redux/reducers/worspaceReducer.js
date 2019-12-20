import {
  SET_WORKSPACE_TRANSLATE_Y,
  SET_WORKSPACE_TRANSLATE_X
} from "../../constants/actions";

const initialState = {
  translateX: 0,
  translateY: 0
};

const workspaceReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_WORKSPACE_TRANSLATE_X:
      return {
        ...state,
        translateX: payload
      };
    case SET_WORKSPACE_TRANSLATE_Y:
      return {
        ...state,
        translateY: payload
      };
    default:
      return state;
  }
};

export default workspaceReducer;
