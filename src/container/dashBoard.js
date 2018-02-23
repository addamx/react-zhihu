import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchUser } from '../action/user'
import { fetchChatList, connectSocket } from '../action/inbox'
import { getQueryKeys } from '../util/func'

import Home from './home'
import Question from '../container/question'
import People from '../container/people'
import Inbox from '../container/inbox'
import Logout from '../container/logout'
import Chat from '../container/chat'

import { Route, Switch } from "react-router-dom";

@connect(
  null,
  {
    fetchUser,
    fetchChatList,
    connectSocket
  }
)
export default class DashBoard extends Component {
  constructor() {
    super();
    this.state = {
      authSuccess: false,
      chatSuccess: false,
      initDone: false
    }
  }

  async componentDidMount() {
    if (window.localStorage.getItem('token')) {
      const res = await this.props.fetchUser();
      this.setState({
        authSuccess: true
      })
      if (res) {
        //验证成功则初始化
        await this.props.fetchChatList();
        await this.setState({
          chatSuccess: true
        });
        this.props.connectSocket();
      } 
    }
    await this.setState({
      initDone: true
    })
  }

  render() {
    const { initDone, authSuccess, chatSuccess } = this.state;
    if (!initDone) {
      return (
        <div>loading</div>
      )
    } else {
      return (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/question/:id" component={Question} />
          <Route path="/people/:id" component ={People} />
          
          { authSuccess && <Route path="/logout" component ={Logout} /> }
          { chatSuccess && <Route path="/inbox" component ={Inbox} /> }
          { chatSuccess && <Route path="/chat/:id" component ={Chat} /> }
          <Route render={() => <h2>404</h2>} />
        </Switch>
      )
    }
  }
}
