import React from "react";
import "./PageError.scss";

const PageError = () => {
    return (
        <div className="page-error-content">
            <h2>404 - PAGE NOT FOUND</h2>
            <p>
                The page you are looking for might have been removed, changed, or temporarily
                unavailable.
            </p>
        </div>
    );
};

export default PageError;
