import { Map, List, fromJS } from "immutable";
import { GET_NOTICE, GET_NOTICELIST } from '../../action/type'

const initState = fromJS([
  {
    _id: '1',
    content: '这是系统通知1',
    type: 'system'
  },
  {
    _id: '2',
    content: '这是系统通知2',
    type: 'system'
  }
])

export default (state = initState, action) => {
  switch (action.type) {
    case GET_NOTICE:
      return state.push(action.payload);
      break;
    case GET_NOTICELIST:
      return state.merge(fromJS(action.payload));

    default:
      return state;
  }
}