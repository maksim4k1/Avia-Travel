import React from "react";
import { Redirect, Route, Switch } from "react-router";
import routers from "../routers";

function AppRouters () {
  return(
    <Switch>
      {
        routers.map(({path, component, exact}, index) => {
          return <Route key={index} path={path} component={component} exact={exact}/>
        })
      }
      <Redirect to="/error/404"/>
    </Switch>
  );
}

export default AppRouters;