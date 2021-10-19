
import React, {useState} from "react"
import { NavBar } from "../src/components/nav/NavBar"
import { ApplicationViews } from "../src/components/ApplicationViews"
import "./StitchSaver.css"

export const StitchSaver = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("stitch_user") !== null)

    const setAuthUser = (user) => {
        sessionStorage.setItem("stitch_user", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("stitch_user") !== null)
    }

    const clearUser = () => {
        sessionStorage.clear();
        setIsAuthenticated(sessionStorage.getItem("stitch_user") !== null)
      }


    return (
        <>
            <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated}/>
            <ApplicationViews setAuthUser={setAuthUser} isAuthenticated={isAuthenticated}/>
        </>
    )
}