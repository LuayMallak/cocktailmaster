import React from "react";
import routes from "./routes";
import { Route, Switch } from "react-router-dom";

function Navigation(props) {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          render={route.render.bind(this, props)}
          ownProps={props}
        />
      ))}
    </Switch>
  );
}

export default Navigation;
