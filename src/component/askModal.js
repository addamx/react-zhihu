import React from 'react'

export default () => {
  return (
    <div>
      <h3>写下你的问题</h3>
      <div>描述精确的问题更易得到解答</div>
      <input type="text" placeholder="问题标题" />
      <textarea placeholder="问题描述(可选)"></textarea>
      <button>提交问题</button>
    </div>
  )
}
