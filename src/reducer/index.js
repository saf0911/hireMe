import {combineReducers} from 'redux';

function users(state = [], action) {
  if (action.type === 'USERS_LOADED') {
    return action.value;
  }
  return state;
}


const rootReducer = combineReducers({
  users
});
export default rootReducer;
