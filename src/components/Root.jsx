import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./main/navbar/NavBar";
import Footer from "./main/footer/Footer";

const Root = () => {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    );
};

export default Root;
