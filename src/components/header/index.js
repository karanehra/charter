import React from "react";
import "./header.scss";
import HeaderToolbar from "../headerToolbar/";

const Header = () => (
  <div className="header">
    <div className="brand">Charter</div>
    <HeaderToolbar />
  </div>
);

export default Header;
