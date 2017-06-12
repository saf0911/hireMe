import {combineReducers} from 'redux';

export const LOAD_USERS = 'Load_USERS';

export function loadThings() {
  return {
    type: LOAD_USERS
  };
}


export default combineReducers({});
