import { combineReducers } from 'redux';
import error from './error';
import users from './users';
import modal from './modal';

export default combineReducers({
  error,
  users,
  modal
});
