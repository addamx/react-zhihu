import React from 'react'
import AnswerItem from './answerItem'

export default ({ answerList }) => {
  return (
    <ul>
      {
        answerList.size > 0 &&
        answerList.map((el, index) => (
          <li key={index}>
            <AnswerItem 
              content={el.get('content')}
              author={el.get('author').get('name')}
              date={el.get('date')}
            />
          </li>
        ))
      }
    </ul>
  )
}
