import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";
 import Loading from "../Pages/Loading";

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
                    loader:()=> fetch('/news.json'),
                     hydrateFallbackElement:<Loading></Loading>
                }
            ]

        },
        {
            path:'/news',
            element:<h2>news</h2>
        },
      
        {
            path:'/*',
            element:<h2>error</h2>
        },
        {
            path:'/categoryDetails/:id',
            element:<PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
            loader:()=> fetch('/news.json'),
             hydrateFallbackElement:<Loading></Loading>
        },
        {
            path:'/auth',
            element:<AuthLayout></AuthLayout>,
            children:[
            {
           path:'/auth/login',
           element:<Login></Login>
        },
        {
            path:'/auth/register',
            element:<Register></Register>
        }
            ]
        },
        
    ]
)

export default router;