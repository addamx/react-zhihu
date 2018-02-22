import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from '../container/login'
import DashBoard from '../container/dashBoard'


const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Login} />
      <Route component={DashBoard} />
    </Switch>
  </Router>
)

export default Root;