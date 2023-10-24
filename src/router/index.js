import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../components/Root";
import LandingPage from "../components/main/landing_page/LandingPage";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <LandingPage />,
            },
        ],
    },
]);

function Components() {
    return <RouterProvider router={routes} />;
}

export default Components;
