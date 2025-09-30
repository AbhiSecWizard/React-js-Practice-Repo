import { createBrowserRouter,RouterProvider } from "react-router-dom"
import { MainLayout } from "./layout/mainLayout"
import { Home } from "./pages/home"
import { About } from "./pages/about"
import { Contact } from "./pages/contact"
export const App = ()=>{

const router = createBrowserRouter([
   {
    path:"/",
    element:<MainLayout/>,
    children:[
        { index: true, element:<Home/> }, // Default route
        { path:"home", element:<Home/>},
        { path:"about", element:<About/>},
        { path:"contact", element:<Contact/>}
    ]
   }
])


  return(
  <>
  <RouterProvider router={router}/>
  </>
  )
}