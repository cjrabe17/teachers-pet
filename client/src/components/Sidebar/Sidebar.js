import React from "react";
import "./Sidebar.css";

const Sidebar = () => (
  <nav className="col-md-2 d-none d-md-block bg-light sidebar">
    <div className="sidebar-sticky">
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            <span data-feather="home"></span>
            Gradebook <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <span data-feather="file"></span>
            Attendance
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <span data-feather="shopping-cart"></span>
            Behavior
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <span data-feather="users"></span>
            Seating Chart
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Sidebar;