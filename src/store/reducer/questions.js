import { GET_ALL_QUESTIONS } from '../../action/type';
import { Map, List } from "immutable";

const initialState = Map({
  allQuestions: List([{title:'wen1'}, {title:'wen2'}])
})

export default (state = initialState, action) => {
  switch (action.type) {

    case GET_ALL_QUESTIONS:
      return state.set('allQuestions', action.payload);

    default:
      return state
  }
}
