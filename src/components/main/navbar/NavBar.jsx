import React from "react";
import "./NavBar.css";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const NavBar = () => {
    const navigate = useNavigate();

    return (
        <div className="navbar-content">
            <div className="content-items">
                <div className="item-logo">
                    <h2>MathMatters</h2>
                </div>
                <div className="item-links">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/class">Class</NavLink>
                </div>
            </div>
            <div className="item-buttons">
                <Button
                    variant="outlined"
                    onClick={() => {
                        navigate("/login");
                    }}
                >
                    Login
                </Button>

                <Button
                    variant="contained"
                    onClick={() => {
                        navigate("/register");
                    }}
                >
                    Register
                </Button>
            </div>
        </div>
    );
};

export default NavBar;
