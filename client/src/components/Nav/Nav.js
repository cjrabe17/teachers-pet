import React from "react";
import "./Navbar.css";

const Nav = () => (
  <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
    <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="/">Teacher's Pet</a>
    <ul className="navbar-nav px-3">
      <li className="nav-item text-nowrap">
        <a className="nav-link" href="/">Period 1</a>
      </li>
    </ul>
    <ul className="navbar-nav px-3">
      <li className="nav-item text-nowrap">
        <a className="nav-link" href="/"><i className="fas fa-cog fa-lg"></i></a>
      </li>
    </ul>
  </nav>
);

export default Nav;