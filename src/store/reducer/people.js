import { GET_USER_INFO } from '../../action/type';
import { Map, List } from "immutable";

const initialState = Map({
  'name': 'testname'
})

export default (state = initialState, action) => {
  switch (action.type) {

    case GET_USER_INFO:
      return state.merge({...action.payload});

    default:
      return state
  }
}
