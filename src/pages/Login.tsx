import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/login.css";

const Login: React.FC = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <label>
          Username:
          <input type="text" placeholder="Enter username" />
        </label>
        <label>
          Password:
          <input type="password" placeholder="Enter password" />
        </label>
        {/* <button type="submit">Login</button> */}
        <NavLink className="naga-btn-3" to="/dashboard">Login</NavLink>
      </form>
    </div>
  );
};

export default Login;