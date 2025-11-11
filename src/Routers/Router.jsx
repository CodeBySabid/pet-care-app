import { createBrowserRouter } from "react-router";
import Navbar from "../Component/Navbar/Navbar";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Component/Home/Home";
import Services from "../Component/Services/Services";
import MyProfile from "../Component/MyProfile/MyProfile";
import Register from "../Component/Register/Register";
import Login from "../Component/Login/Login";
import BookNow from "../Component/BookNow/BookNow";
import PetDetails from "../Component/Services/PetDetails";

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
                    Component: Services,
                },
                {
                    path: '/services/:serviceId',
                    Component: PetDetails,
                },
                {
                    path: '/myprofile',
                    Component: MyProfile,
                },
                {
                    path: '/login',
                    Component: Login,
                },
                {
                    path: '/register',
                    Component: Register,
                },
                {
                    path: '/booknow',
                    Component: BookNow,
                }
            ]
        },

    ]
)

export default router