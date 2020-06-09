import React from "react";
import routes from "./routes";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function Navigation() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default Navigation;
