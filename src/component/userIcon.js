import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class UserIcon extends Component {
  constructor() {
    super();
    this.state = {
      expanded: false
    }
    this.handlerExpand = this.handlerExpand.bind(this);
  }

  handlerExpand() {
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }))
  }

  render() {
    const _id = this.props.user.get('_id');
    const name = this.props.user.get('name');

    return (
      <div>
        <button onClick={this.handlerExpand}>
          <span title={_id}>{name}</span>
          
        </button>
        {
          this.state.expanded && 
          <ul>
            <li><Link to={`/people/${_id}`}>我的主页</Link></li>
            <li><Link to="/logout">退出</Link></li>
          </ul>
        }
      </div>
    )
  }
}
