import { GET_USER_INFO, USER_LOGIN, USER_REGISTER } from '../../action/type';
import { Map, List } from "immutable";

const initialState = Map({
  current: Map({
    'name': '',
    '_id': ''
  })
})

export default (state = initialState, action) => {
  switch (action.type) {

    case USER_LOGIN:
      console.log(action.payload.toJS())
      return state.set('current', action.payload);

    case USER_REGISTER:
      return state.set('current', action.payload);

    default:
      return state
  }
}
