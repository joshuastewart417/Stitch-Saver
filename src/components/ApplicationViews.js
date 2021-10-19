import React from "react";
import {Login} from "../components/auth/Login"
import {Register} from "../components/auth/Register"
import {Route} from "react-router-dom";
import {StitchForm} from "../components/stitches/StitchForm"
import {Redirect} from "react-router"



export const ApplicationViews = ({setAuthUser, isAuthenticated}) => {
  return (
    <>
      <Route exact path="/stitchform">
        {isAuthenticated ? <StitchForm /> : <Redirect to="/login" />}
      </Route>

       {/* Authentication */}
      <Route path="/login">
        <Login setAuthUser={setAuthUser} />
      </Route>

      <Route path="/register" >
        <Register setAuthUser={setAuthUser} />
      </Route>
    </>
  );
};