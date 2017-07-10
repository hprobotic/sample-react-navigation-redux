import { combineReducers }  from 'redux'
import counter from '../scences/Counter/CounterReducer'
import nav from './NavReducer'

export default combineReducers({
  counter,
  nav
})