import { createBrowserRouter } from "react-router";
import Navbar from "../Component/Navbar/Navbar";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Component/Home/Home";
import Services from "../Component/Services/Services";
import MyProfile from "../Component/MyProfile/MyProfile";
import Register from "../Component/Register/Register";
import Login from "../Component/Login/Login";
import PetDetails from "../Component/Services/PetDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <MainLayout></MainLayout>,
            children: [
                {
                    index: true,
                    Component: Home,
                },
                {
                    path: '/services',
                    element: <PrivateRoute>
                        <Services></Services>
                    </PrivateRoute>,
                },
                {
                    path: '/services/:serviceId',
                    element: <PrivateRoute>
                        <PetDetails></PetDetails>
                    </PrivateRoute>,
                },
                {
                    path: '/myprofile',
                    element: <PrivateRoute>
                        <MyProfile></MyProfile>
                    </PrivateRoute>,
                },
                {
                    path: '/login',
                    Component: Login,
                },
                {
                    path: '/register',
                    Component: Register,
                },
            ]
        },

    ]
)

export default router