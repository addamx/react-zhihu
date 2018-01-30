import React from 'react'

export default () => {
  const questions = [{title:'这是问题1'},{title:'这是问题2'}]
  return (
    <ul>
      {
        questions.map( (el,index) => (
          <li key={index}>{el.title}</li>
        ))
      }
    </ul>
  )
}
