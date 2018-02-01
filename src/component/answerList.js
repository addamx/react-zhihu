import React from 'react'
import Answer from './answer'

export default ({ answerList }) => {
  return (
    <ul>
      {
        answerList &&
        answerList.map((el, index) => (
          <li key={index}>
            <Answer 
              content={el.get('content')}
              author={el.get('author')}
              date={el.get('date')}
            />
          </li>
        ))
      }
    </ul>
  )
}
