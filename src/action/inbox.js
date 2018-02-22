import io from 'socket.io-client';
import { GET_CHATLIST, SEND_MESSAGE, READ_MESSAGE } from './type'

import axios from 'axios';

let socket = null;

export function connectSocket() {
  return (dispatch, state) => {
    try {
      const token = window.localStorage.getItem('token');

      socket = io('ws://127.0.0.1:1510', {
        query: { token: token }
      })
      //连接服务器
      socket.on('connect', () => {
        socket.emit('user', 'addams')
      });
      //接收聊天消息
      socket.on("receiveMessage", data => {
        console.log(data);
      });


      //测试服务器回应
      socket.on('systemlog', data => {
        console.log(data)
      })
    } catch (error) {
      console.error(error)
    }
  }
}

export function fetchChatList() {
  return async (dispatch, state) => {
    try {
      const res = await axios.get('/inbox/all');
      if(res.status === 200 && res.data.code === 0) {
        const userId = state().get('people').get('current').get('_id');
        const chatList = res.data.data;

        let noReadChat = 0;
        chatList.forEach(chat => {
          let noReadMsg = 0;
          chat.messageList.forEach(msg => {
            if (msg.from._id === userId && !msg.fromReaded) {
              noReadMsg++
            } else if(msg.to._id === userId && !msg.toReaded){
              noReadMsg++
            }
          })
          chat.noReadChat = noReadMsg
          if (noReadMsg ) {noReadChat = noReadChat + noReadMsg}
        })
        dispatch({type: GET_CHATLIST, payload: {noReadChat, chatList}})
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export function sendMessage(toId, message) {
  return (dispatch, state) => {
    const userId = state().get('people').get('current').get('_id');
    const newMsg = {
      to: toId,
      message,
      date: Date()
    }
    const chatId = [userId, toId].sort().join('')
    dispatch({type: SEND_MESSAGE, payload: {chatId, talker: toId, date: Date(), newMsg }})
    socket.emit('sendMessage', {to: toId, message, chatId, date: Date()});
  }
}
export function sendMessageSuccess() {

}