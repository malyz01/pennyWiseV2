import { Types } from '../types';

export default (state = {}, action) => {
  switch (action.type) {
    case Types.FETCH_USERS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
