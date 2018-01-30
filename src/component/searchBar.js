import React from 'react';
import SearchResult from './searchResult';

export default () => {
  return (
    <div>
      <input placeholder="搜索你感兴趣的内容" />
      <button>提问</button>
      <div style={{display:'none'}}>
        <SearchResult />
      </div>
    </div>
  )
}
