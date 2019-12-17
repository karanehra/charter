import React from "react";
import PropTypes from "prop-types";
import "./connector.scss";

const Connector = props => {
  return <line stroke="black" {...props} strokeWidth={2}></line>;
};

Connector.propTypes = {
  x1: PropTypes.number,
  x2: PropTypes.number,
  y1: PropTypes.number,
  y2: PropTypes.number
};

export default Connector;
