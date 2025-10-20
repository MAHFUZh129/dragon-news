import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import HomePage from "../pages/HomePage";
import CatgoryNews from "../pages/CatgoryNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewsDetails from "../pages/NewsDetails";
import PrivateRouter from "../provider/PrivateRouter";

export const router = createBrowserRouter([
{
    path:'/',
    Component:HomeLayout,
    children:[
        {
            path:'',
            Component:HomePage
        },
        
        {
            path:'/ctg/:id',
            Component:CatgoryNews,
            loader:()=>fetch('/news.json')
        },
        
    ]
},
{
    path:'/auth',
    Component:AuthLayout,
    children:[
        {
            path:'/auth/login',
            Component:Login
        },
        {
            path:'/auth/register',
            Component:Register
        }
    ]
},
{
    path:'/news-details/:id',
    element:<PrivateRouter>
        <NewsDetails></NewsDetails>
    </PrivateRouter>,
    loader:()=>fetch('/news.json')

}
])



