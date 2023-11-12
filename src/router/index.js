import { createBrowserRouter, RouterProvider } from "react-router-dom";
//main page
import MainPage from "../components/main/Main";
import LandingPage from "../components/main/landing_page/LandingPage";
import Login from "../components/main/login/Login";
import Register from "../components/main/register/Register";
import AboutPage from "../components/main/about_page/AboutPage";
import ClassPage from "../components/main/class_page/ClassPage";
import PageError from "../components/main/page_error/PageError";

//teacher page
import TeacherMainPage from "../components/teacher/Main";
import TeacherDashboard from "../components/teacher/dashboard/Dashboard.jsx";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
        children: [
            {
                path: "",
                element: <LandingPage />,
            },
            {
                path: "about",
                element: <AboutPage />,
            },
            {
                path: "class",
                element: <ClassPage />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "*",
                element: <PageError />,
            },
        ],
    },
    {
        path: "teacher",
        element: <TeacherMainPage />,
        children: [
            {
                path: "",
                element: <TeacherDashboard />,
            },
        ],
    },
]);

function Components() {
    return <RouterProvider router={routes} />;
}

export default Components;
