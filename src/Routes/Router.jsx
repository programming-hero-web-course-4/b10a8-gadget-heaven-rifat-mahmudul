import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Page/Home";
import Statistics from "../Page/Statistics";
import Dashboard from "../Page/Dashboard";
import AllGadgets from "../components/AllGadgets";
import ProductDetails from "../Page/ProductDetails";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";
import Error from "../Page/Error";
import AboutUs from "../Page/AboutUs";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement : <Error></Error>, 
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
                element : <Dashboard></Dashboard>,
                children : [
                    {
                        path : '/dashboard',
                        element : <Cart></Cart>
                    },
                    {
                        path : '/dashboard/wishlist',
                        element : <Wishlist></Wishlist>
                    },
                ]
            },
            {
                path : '/cardDetails/:product_id',
                element: <ProductDetails></ProductDetails>,
                loader : () => fetch('/Data.json')
            },
            {
                path : '/aboutUs',
                element : <AboutUs></AboutUs>
            }
        ]
    },
]);
