import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

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
    ]
)

export default router;