import React from 'react'
import { Link } from 'react-router-dom'

export default ({ noReadChat }) => {
  return (
    <div>
      <span>{ noReadChat }</span>
      <ul>
        {
          // chatList.map((el) => (
          //   <li><Link></Link></li>
          // ))
        }
      </ul>
      <Link to="/inbox">查看全部私信</Link>
    </div>
  )
}
