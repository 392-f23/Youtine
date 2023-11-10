// BottomNavbar.js
import React, { useState } from "react";
import "./BottomNavbar.css";
import { NavLink } from "react-router-dom";

const BottomNavbar = () => {
  return (
    <div className="bottom-navbar">
      <NavLink exact to="/" className="nav-item" activeClassName="active">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 100 100"
        >
          <circle cx="50" cy="50" r="40" fill="#ff6b6b" />
          <rect x="30" y="30" width="40" height="40" fill="#fff" />
          <rect x="20" y="50" width="60" height="10" fill="#fff" />
        </svg>
        Routines
      </NavLink>
      <NavLink to="/profile" className="nav-item" activeClassName="active">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 100 100"
        >
          <circle cx="50" cy="35" r="20" fill="#007bff" />
          <rect x="30" y="55" width="40" height="10" fill="#007bff" />
          <rect x="30" y="70" width="40" height="5" fill="#007bff" />
        </svg>
        Profile
      </NavLink>
      <NavLink to="/summary" className="nav-item" activeClassName="active">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 100 100"
        >
          <circle cx="50" cy="50" r="40" fill="#009688" />
          <line
            x1="30"
            y1="50"
            x2="70"
            y2="50"
            stroke="#fff"
            stroke-width="6"
          />
          <line
            x1="50"
            y1="30"
            x2="50"
            y2="70"
            stroke="#fff"
            stroke-width="6"
          />
        </svg>
        Summary
      </NavLink>
    </div>
  );
};

export default BottomNavbar;
