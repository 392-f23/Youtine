// BottomNavbar.js
import React, { useState } from 'react';
import './BottomNavbar.css';
import { NavLink } from 'react-router-dom';

const BottomNavbar = () => {

    return (
        <div className="bottom-navbar">
            <NavLink 
                exact 
                to="/" 
                className="nav-item" 
                activeClassName="active"
            >
                Routines
            </NavLink>
            <NavLink 
                to="/profile" 
                className="nav-item" 
                activeClassName="active"
            >
                Profile
            </NavLink>
            <NavLink 
                to="/summary" 
                className="nav-item" 
                activeClassName="active"
            >
                Summary
            </NavLink>
        </div>
    );
}

export default BottomNavbar;
