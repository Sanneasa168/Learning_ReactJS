import React from "react";
import { NavbarComponent } from "../components/NabarComponent";
import  {Outlet} from "react-router-dom"
export default function Layout(){
    return (
        <>
            <header>
            <NavbarComponent/>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    )

}