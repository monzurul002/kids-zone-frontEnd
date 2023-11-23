import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Alltoys from "../Pages/Alltoys/Alltoys";
import AddToy from "../Pages/AddToy/AddToy";
import MyToys from "../Pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "alltoys",
                element: <Alltoys></Alltoys>
            },
            {
                path: "addtoy",
                element: <AddToy></AddToy>
            },
            {
                path: "mytoys",
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
                loader: () => fetch("http://localhost:5000/mytoys")
            }


        ],

    },
    {
        path: "*",
        element: <NotFound></NotFound>
    }
])

export default router;