import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import CategoryDetails from "../Pages/CategoryDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router = createBrowserRouter(
    [
        {
            path:'/',
            element:<HomeLayout></HomeLayout>,
            children:[
                {
                    path:"",
                    element:<Home></Home>
                },
                {
                    path:'/category/:id',
                    element:<CategoryNews></CategoryNews>,
                    loader:()=> fetch('/news.json')
                }
            ]

        },
        {
            path:'/news',
            element:<h2>news</h2>
        },
        {
            path:'/',
            element:<h2>home</h2>
        },
        {
            path:'/*',
            element:<h2>error</h2>
        },
        {
            path:'/categoryDetails/:id',
            element:<CategoryDetails></CategoryDetails>,
            loader:()=> fetch('/news.json')
        },
        {
        path:'/login',
        element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        }
    ]
)

export default router;