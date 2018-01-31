import { combineReducers } from 'redux-immutable';
import people from './people'
import questions from './questions'

const appReducers = combineReducers({
  people,
  questions
})

export default (state, action) => {
  //...global action
  return appReducers(state, action)
}



