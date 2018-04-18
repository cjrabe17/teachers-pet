import React from "react";
import "./Sidebar.css";

const Sidebar = () => (
  <nav className="col-md-2 d-none d-md-block bg-light sidebar">
    <div className="sidebar-sticky">
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link" href="/">
            Gradebook
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/attendance">
            Attendance
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/behavior">
            Behavior
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Sidebar;