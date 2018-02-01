import React from 'react';
import SearchResult from './searchResult';

export default () => {
  return (
    <div>
      <input placeholder="搜索你感兴趣的内容" />
      <div style={{display:'none'}}>
        <SearchResult />
      </div>
    </div>
  )
}
