import {createRoot} from "react-dom/client";
 import ".//index.css"

import Home from "./view/home/home"
import About from "./view/about/about"

import { createBrowserRouter,RouterProvider } from "react-router-dom";

const root = createRoot(document.getElementById("root"));


const router =createBrowserRouter([{
    path:'/',
    element:<Home/>,
},
{
    path:'/about',
    element:<About/>,
},
])

root.render(<RouterProvider router={router}/>)
//const currentpath = window.location.pathname;

//if (currentpath == "/"){
 //   root.render(<Home/>)
//}
//else if (currentpath == "/about")
//{
//    root.render(<About/>)
//}
//else if(currentpath == "/contact"){
  //  root.render(<Contact/>)
//}

//else{
  //  root.render(<h1> 404 NOT Found</h1>)
//} 
