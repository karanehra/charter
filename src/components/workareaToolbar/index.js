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
      setWorkspaceTranslateYAction(translateY + (isPositive ? 0.5 : -0.5))
    );
  };

  const translateHorizontal = isPositive => () => {
    dispatch(
      setWorkspaceTranslateXAction(translateX + (isPositive ? 0.5 : -0.5))
    );
  };

  return (
    <div className="wa-toolbar">
      <div className="button-pad">
        <div className="up" onClick={translateVertical(false)}>
          u
        </div>
        <div className="down" onClick={translateVertical(true)}>
          d
        </div>
        <div className="left" onClick={translateHorizontal(false)}>
          l
        </div>
        <div className="right" onClick={translateHorizontal(true)}>
          r
        </div>
      </div>
    </div>
  );
};
export default WorkareaToolbar;
