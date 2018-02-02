import { combineReducers } from 'redux-immutable';
import people from './people'
import question from './question'
import inbox from './inbox'

const appReducers = combineReducers({
  people,
  question,
  inbox
})

export default (state, action) => {
  //...global action
  return appReducers(state, action)
}



