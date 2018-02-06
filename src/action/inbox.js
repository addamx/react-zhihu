import io from 'socket.io-client';
import { GET_CHATLIST, SEND_MESSAGE, READ_MESSAGE } from './type'

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

export function getUserName(userId) {
  return 
}

export function getChatList(userId) {

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