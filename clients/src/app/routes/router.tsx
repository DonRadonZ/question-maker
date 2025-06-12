import { createBrowserRouter, Navigate } from "react-router-dom";
import AppLayout from "../../shared/components/layout/AppLayout";
import Home from "../../features/home/page/Home";
import Question from "../../features/question/page/Question";

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
        ,
        {
            path: "addquestion",
            element: <Question/>
        }
    ]
    }
])

export default router