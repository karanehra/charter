import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setWorkspaceTranslateXAction,
  setWorkspaceTranslateYAction
} from "../../redux/actions/workspaceActions";
import "./workareaToolbar.scss";

const WorkareaToolbar = () => {
  const dispatch = useDispatch();
  const { translateX, translateY } = useSelector(state => ({
    translateX: state.workspaceReducer.translateX,
    translateY: state.workspaceReducer.translateY
  }));

  const translateVertical = isPositive => () => {
    dispatch(
      setWorkspaceTranslateYAction(translateY + (isPositive ? 0.05 : -0.05))
    );
  };

  const translateHorizontal = isPositive => () => {
    dispatch(
      setWorkspaceTranslateXAction(translateX + (isPositive ? 0.05 : -0.05))
    );
  };

  return (
    <div className="wa-toolbar">
      <div className="button-pad">
        <div className="up" onClick={translateVertical(true)}>
          u
        </div>
        <div className="down" onClick={translateVertical(false)}>
          d
        </div>
        <div className="left" onClick={translateHorizontal(true)}>
          l
        </div>
        <div className="right" onClick={translateHorizontal(false)}>
          r
        </div>
      </div>
    </div>
  );
};
export default WorkareaToolbar;
