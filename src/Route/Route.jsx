import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import ServicePage from "../pages/ServicePage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage";
import AboutUs from "../pages/AboutUs";
import Portfolio from "../pages/Portfolio";

const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/services.json')
            },
            {
                path: '/services/:id',
                element: <PrivateRoute><ServicePage></ServicePage></PrivateRoute>,
                loader: () => fetch('/services.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/aboutus',
                element: <PrivateRoute><AboutUs></AboutUs></PrivateRoute>
            },
            {
                path: '/portfolio',
                element: <PrivateRoute><Portfolio></Portfolio></PrivateRoute>
            }
        ]
    }
])

export default myCreatedRoute;