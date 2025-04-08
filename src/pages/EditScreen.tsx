import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/editScreen.css";

const EditScreen: React.FC = () => {
  return (
    <div className="edit-screen">
      <h2>Edit Item</h2>
      <form>
        <label>
          Item Name:
          <input type="text" placeholder="Enter item name" />
        </label>
        {/* <button type="submit">Save</button> */}
        <NavLink className="naga-btn-3" to="/dashboard">Save</NavLink>
      </form>
    </div>
  );
};

export default EditScreen;