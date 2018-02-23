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
    //   message: '',
    //   date: '',
    //   fromReaded: false,
    //   toReaded: false
    // }
  ]
})

export default (state = initState, action) => {
  switch (action.type) {
    case GET_CHATLIST:          
      return state.merge(action.payload)

    case SEND_MESSAGE:
      console.log('SEND_MESSAGE:', action.payload)
    
      var { chatId, date, message, fromMe, talker } = action.payload

      var noReadChat = state.get('noReadChat') + 1;
      var chatList = state.get('chatList');
      var messageList = state.get('messageList').push(Map({ chatId, fromMe: false, date, message }));
      
      const chatIndex = chatList.findKey((v, index, arr) => v.get('chatId') === chatId);

      //已存在的chat
      if (chatIndex != undefined) {
        console.log(messageList.toJS())

        return state.merge({ messageList });
      } else {
        var chatList = chatList.push(
            Map({
              date,
              chatId,
              talker,
              noReadMsg: 1,
            })
          );
        return state.merge({ noReadChat, chatList, messageList });
      }
    
    default:
      return state;
  }
}