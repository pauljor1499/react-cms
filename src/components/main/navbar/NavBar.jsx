import React from "react";
import "./NavBar.css";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();

    return (
        <div className="navbar-content">
            <div className="content-title">
                <h2>CMS</h2>
            </div>
            <div className="content-items">
                <div className="item-links">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/class">Class</NavLink>
                </div>
                <div className="item-buttons">
                    <button
                        onClick={() => {
                            navigate("/login");
                        }}
                    >
                        Login
                    </button>
                    <button
                        onClick={() => {
                            navigate("/register");
                        }}
                    >
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
