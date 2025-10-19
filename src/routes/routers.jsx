import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import HomePage from "../pages/HomePage";
import CatgoryNews from "../pages/CatgoryNews";

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
}
])



