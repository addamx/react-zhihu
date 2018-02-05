import { Map, List, fromJS } from "immutable";
import { GET_CHATLIST, SEND_MESSAGE, READ_MESSAGE } from '../../action/type'

const initState = fromJS({
  noReadChat: 0, //未读消息数目
  chatList: [
    // {
    //   chatId: '',
    //   noReadMsg: 0,
    //   talker: '',
    //   date: '',
      
    // }
  ],
  messageList: [
    // {
    //   chatId: '',
    //   from: '',
    //   to: '',
    //   content: '',
    //   date: '',
    //   fromReaded: false,
    //   toReaded: false
    // }
  ]
})

export default (state = initState, action) => {
  switch (action.type) {
    /*payload
    {
      userId,
      chatList: [
        {
          chatId,
          talker,
          date, //更新日期
          messageList: [
            {_id, from, to, message, date, fromReaded, toReaded}
          ]
        }
      ]
    }
    */
    case GET_CHATLIST:          
      var noReadChat = 0;
      const userId = action.payload.userId
      const chatList = action.payload.chatList;
      chatList.forEach(chat => {
        var noReadMsg = 0;
        chat.messageList.forEach(msg => {
          if (msg.from === userId && !msg.fromReaded) {
            noReadMsg++
          } else if(msg.to === userId && !msg.toReaded){
            noReadMsg++
          }
        })
        chat.noReadChat = noReadMsg
        if (noReadMsg ) {noReadChat = noReadChat + noReadMsg}
      })
      return state.merge({noReadChat, chatList})
  
    // {
    //   chatId,
    //   talker,
    //   date,
    //   newMsg: {
    //       from,
    //       to,
    //       message,
    //       date
    //   }
    // }
    case SEND_MESSAGE:
      var payload = action.payload;
      var chatId = payload.chatId
      console.log('SEND_MESSAGE:', payload)
      var noReadChat = state.get('noReadChat') + 1;
      var chatList = state.get('chatList');
      
      const chatIndex = chatList.findKey((v, index, arr) => v.get('chatId') === chatId);

      //已存在的chat
      if (chatIndex != undefined) {
        var date = payload.date;
        var chat = chatList.get(chatIndex);
        var noReadMsg = chat.get('noReadMsg') + 1;
        var messageList = state.get('messageList').push(payload.newMsg);
        var chat = chat.merge({date, noReadMsg, messageList})
        var chatList = chatList.set(chatIndex, chat);

        return state.merge({noReadChat, chatList})
      } else {
        var chatList = chatList.push(
            Map({
              date: payload.date,
              chatId,
              noReadMsg: 1,
              messageList: List([Map(payload.newMsg)])
            })
          )
        return state.merge({noReadChat, chatList})
      }
    
    default:
      return state;
  }
}