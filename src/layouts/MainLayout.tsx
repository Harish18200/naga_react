import React from "react";
import { Outlet } from "react-router-dom";
import Topbar from "../components/Topbar";
import Menubar from "../components/Menubar";
import "../styles/mainLayout.css";

const MainLayout: React.FC = () => {
  return (
    <div className="content">
      <Topbar />
      <div className="content-body">
        <Menubar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;