import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import { Dashboard } from "../pages/DashBoard";
import { List } from "../pages/List"

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/list/:type" exact component={List} />
      </Switch>
    </BrowserRouter>
  )
}

export { AppRoutes };