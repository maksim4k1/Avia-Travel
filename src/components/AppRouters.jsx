import React from "react";
import { Redirect, Route, Switch } from "react-router";
import routers from "../routers";

function AppRouters () {
  return(
    <Switch>
      {
        routers.map((route, index) => {
          return <Route key={index} {...route}/>
        })
      }
      <Redirect to="/"/>
    </Switch>
  );
}

export default AppRouters;