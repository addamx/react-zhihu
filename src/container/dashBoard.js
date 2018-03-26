import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchUser } from '../action/user'
import { fetchChatList, connectSocket } from '../action/inbox'
import { getQueryKeys } from '../util/func'

import { Route, Switch } from "react-router-dom";
import asyncComponent from '../asyncComponent'

/*
require.ensure([], () => {
    require("a");
}, err => {
    console.error("We failed to load chunk: " + err);
}, "chunk-name");

//react-router 4.0 不再提供getComponent异步获取组件
*/
const Home = asyncComponent(() => require.ensure([], () => {
  return require('./home'); //return import('./home')
}, 'home'));

const NavBar = asyncComponent(() => import(/* webpackChunkName: "navBar" */ '../component/navBar'))
const Question = asyncComponent(() => import(/* webpackChunkName: "question" */ './question'))
const People = asyncComponent(() => import(/* webpackChunkName: "people" */ './people'))
const Inbox = asyncComponent(() => import(/* webpackChunkName: "inbox" */ './inbox'))
const Logout = asyncComponent(() => import(/* webpackChunkName: "logout" */ './logout'))
const Chat = asyncComponent(() => import(/* webpackChunkName: "chat" */ './chat'))

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
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/question/:id" component={Question} />
            <Route path="/people/:id" component ={People} />
            
            { authSuccess && <Route path="/logout" component ={Logout} /> }
            { chatSuccess && <Route path="/inbox" component ={Inbox} /> }
            { chatSuccess && <Route path="/chat/:id" component ={Chat} /> }
            <Route render={() => <h2>404</h2>} />
          </Switch>
        </div>
      )
    }
  }
}
