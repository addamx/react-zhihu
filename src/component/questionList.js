import React from 'react';
import QuestionItem from './questionItem'


export default ({ questionList, history }) => {
  return (
    <ul>
      {
        questionList.size > 0 &&
        questionList.map( (el,index) => (
          <li key={index}>
            <QuestionItem
              title={el.get('title')}
              questionId={el.get('_id')}
              author={el.get('author')}
              date={el.get('date')}
              history={history}
            />
          </li>
        ))
      }
    </ul>
  )
}
