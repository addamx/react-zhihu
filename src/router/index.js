import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from '../container/login'
import DashBoard from '../container/dashBoard'
import Question from '../container/question'
import People from '../container/people'
import Inbox from '../container/inbox'

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" render={() => (<h1>INDEX PAGE112c</h1>)} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={DashBoard} />
      <Route path="/question/:id" component={Question} />
      <Route path="/people/:id" component ={People} />
      <Route path="/inbox" component ={Inbox} />
    </Switch>
  </Router>
)

export default Root;