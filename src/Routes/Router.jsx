import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Page/Home";
import Statistics from "../Page/Statistics";
import Dashboard from "../Page/Dashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children : [
            {
                path: '/',
                element : <Home></Home>,
            },
            {
                path: '/statistics',
                element : <Statistics></Statistics>
            },
            {
                path: '/dashboard',
                element : <Dashboard></Dashboard>
            }
        ]
    },
]);
