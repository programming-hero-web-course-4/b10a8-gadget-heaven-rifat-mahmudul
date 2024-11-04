import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Page/Home";
import Statistics from "../Page/Statistics";
import Dashboard from "../Page/Dashboard";
import AllGadgets from "../components/AllGadgets";
import ProductDetails from "../Page/ProductDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children : [
            {
                path: '/',
                element : <Home></Home>,
                children : [
                    {
                        path : '/',
                        element : <AllGadgets></AllGadgets>,
                    },
                    {
                        path : '/category/:category',
                        element : <AllGadgets></AllGadgets>,
                    }
                ]
            },
            {
                path: '/statistics',
                element : <Statistics></Statistics>
            },
            {
                path: '/dashboard',
                element : <Dashboard></Dashboard>
            },
            {
                path : '/cardDetails/:product_id',
                element: <ProductDetails></ProductDetails>,
                loader : () => fetch('/Data.json')
            }
        ]
    },
]);
