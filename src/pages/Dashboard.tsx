import React from "react";
import DataTable from "../components/DataTable";
import "../styles/dashboard.css";

const Dashboard: React.FC = () => {

  return (
    <div className="dashboard">
      <h2>Items List</h2>
      <DataTable />
      {/* <ul>
        <li>
          Item 1
          <button className="edit-btn">Edit</button>
          <button className="delete-btn" onClick={deleteItem}>Delete</button>
        </li>
        <li>
          Item 2
          <button className="edit-btn">Edit</button>
          <button className="delete-btn" onClick={deleteItem}>Delete</button>
        </li>
      </ul> */}
    </div>
  );
};

export default Dashboard;