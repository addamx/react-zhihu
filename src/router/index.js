import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const Root = () => (
  <Router>
    <Switch>
      <Route path="/" render={() => (<h1>INDEX PAGE</h1>)} />
    </Switch>
  </Router>
)

export default Root;