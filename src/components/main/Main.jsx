import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./navbar/NavBar";
import Footer from "./footer/Footer";

const Main = () => {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    );
};

export default Main;
