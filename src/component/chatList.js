import React from 'react'
import { Link } from 'react-router-dom'


export default ({ chatList }) => {
  return (
    <ul>
      {
        chatList.map(el => (
          <li key={el.get('chatId')}>
            <Link to={`/chat/${el.get('chatId')}`}>{`与${el.get('talker').get('name')}的聊天`} {el.get('chatId')}<i>{el.get('noReadMsg')}</i></Link>
          </li>
        ))
      }
    </ul>
  )
}
