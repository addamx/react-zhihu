import React from 'react'

export default ({handleLogin, handleTextChange, value}) => {
  return (
    <div>
      <input name="name" onChange={v => handleTextChange(v)} value={value.name} placeholder="用户名" />
      <input name="pwd" onChange={v => handleTextChange(v)} type="password" value={value.pwd} placeholder="密码" />
      <button onClick={handleLogin}>登录</button>
    </div>
  )
}
