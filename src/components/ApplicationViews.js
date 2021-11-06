import React from "react";
import {Login} from "../components/auth/Login"
import {Register} from "../components/auth/Register"
import {Route} from "react-router-dom";
import {StitchForm} from "../components/stitches/StitchForm"
import {StitchList} from "../components/stitches/StitchList"
import {StitchEditForm} from "./stitches/StitchEditForm";
import {Redirect} from "react-router"



export const ApplicationViews = ({setAuthUser, isAuthenticated}) => {
  return (
    <>

      <Route exact path="/">
        <Login setAuthUser={setAuthUser} />
      </Route>

      <Route exact path="/stitchform">
        {isAuthenticated ? <StitchForm /> : <Redirect to="/" />}
      </Route>

      <Route path="/stitchList">
        {isAuthenticated ? <StitchList /> : <Redirect to="/" />}
      </Route>

      <Route path="/stitches/:stitchId(\d+)/edit">
      {isAuthenticated ? <StitchEditForm /> : <Redirect to="/" />}
      </Route>

      <Route path="/register" >
        <Register setAuthUser={setAuthUser} />
      </Route>
    </>
  );
};