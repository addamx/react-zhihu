import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchUser } from '../action/user'
import { fetchChatList } from '../action/inbox'

import Home from './home'
import Question from '../container/question'
import People from '../container/people'
import Inbox from '../container/inbox'

import {  Route, Switch } from "react-router-dom";

@connect(
  null,
  {
    fetchUser,
    fetchChatList,
  }
)
export default class DashBoard extends Component {

  async componentDidMount() {
    if (window.localStorage.getItem('token')) {
      const res = await this.props.fetchUser();

      if (res) {
        //验证成功则初始化
        await this.props.fetchChatList();
        return;
      } 
    }
    // this.props.history.push('/login');
  }
  render() {
    
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/question/:id" component={Question} />
        <Route path="/people/:id" component ={People} />
        <Route path="/inbox" component ={Inbox} />
        <Route render={() => <h2>404</h2>} />
      </Switch>
    )
  }
}
