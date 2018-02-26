import React from 'react'

export default ({ searchResult }) => {
  return (
    <ul>
      {
        searchResult.map( (el,index) => (
          <li key={index}>{el.get('title')}</li>
        ))
      }
    </ul>
  )
}
