import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../components/Root";
import LandingPage from "../components/main/landing_page/LandingPage";
import Login from "../components/main/login/Login";
import Register from "../components/main/register/Register";
import AboutPage from "../components/main/about_page/AboutPage";
import ClassPage from "../components/main/class_page/ClassPage";
import PageError from "../components/main/page_error/PageError";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <LandingPage />,
            },
            {
                path: "/about",
                element: <AboutPage />,
            },
            {
                path: "/class",
                element: <ClassPage />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ],
        errorElement: <PageError />,
    },
]);

function Components() {
    return <RouterProvider router={routes} />;
}

export default Components;
