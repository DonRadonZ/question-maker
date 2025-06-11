import { createBrowserRouter, Navigate } from "react-router-dom";
import AppLayout from "../../shared/components/layout/AppLayout";
import Home from "../../features/home/page/Home";

const router = createBrowserRouter([
    {
    element: <AppLayout />,
    children: [
        {
            index: true,
            element: <Navigate replace to="home" />
        },
        {
            path: "home",
            element: <Home/>
        }
    ]
    }
])

export default router