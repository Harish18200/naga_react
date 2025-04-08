import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/topbar.css";

const Topbar: React.FC = () => {
  return (
    <div className="topbar">
      <div className="logo">MyApp</div>
      <div className="user-actions">
        <span className="username">Username</span>
        {/* <button className="logout-btn">Logout</button> */}
        <NavLink className="naga-btn-2" to="/">Logout</NavLink>
      </div>
    </div>
  );
};

export default Topbar;