import { Header } from "../UI/headers"
import { Fotter } from "../UI/fotter"
import { Outlet } from "react-router-dom"

export const MainLayout = ()=>{
    return (
        <>
        <Header/>
        <Outlet />
        <Fotter/>
        </>
    )
}