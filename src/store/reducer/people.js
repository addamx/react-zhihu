import { GET_USER_INFO, USER_LOGIN, USER_REGISTER, USER_LOGOUT } from '../../action/type';
import { Map, List } from "immutable";

const initialState = Map({
  current: Map({
    // 'name': '',
    // '_id': ''
  })
})

export default (state = initialState, action) => {
  switch (action.type) {

    case USER_LOGIN:
      return state.set('current', action.payload);

    case USER_REGISTER:
      return state.set('current', action.payload);

    case USER_LOGOUT:
      return state.set('current', Map({}))

    default:
      return state
  }
}
