import { combineReducers } from 'redux';
import error from './error';
import users from './users';
import modal from './modal';

const rootReducer = combineReducers({
  error,
  users,
  modal
});

export type IRootState = ReturnType<typeof rootReducer>;

export default rootReducer;
