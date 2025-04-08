import React, { useState } from "react";
import "../styles/menubar.css";

const Menubar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const toggleMenu = () => {
    setCollapsed(!collapsed);
  };

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };

  return (
    <div className={`menubar ${collapsed ? "collapsed" : ""}`}>
      <button className="hamburger" onClick={toggleMenu}>☰</button>
      <ul>
        <li>
          <span className="menu-icon">🏠</span>
          {!collapsed && <span className="menu-name">Dashboard</span>}
        </li>
        <li>
          <span className="menu-icon">⚙️</span>
          {!collapsed && <span className="menu-name">Settings</span>}
        </li>
        <li onClick={toggleSubmenu} className="submenu-parent">
          <span className="menu-icon">📊</span>
          {!collapsed && <span className="menu-name">Reports</span>}
          {submenuOpen && (
            <ul className="submenu">
              <li>Monthly</li>
              <li>Yearly</li>
            </ul>
          )}
        </li>
        <li>
          <span className="menu-icon">🚪</span>
          {!collapsed && <span className="menu-name">Logout</span>}
        </li>
      </ul>
    </div>
  );
};

export default Menubar;