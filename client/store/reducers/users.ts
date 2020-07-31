import { Types } from '../types';

const INITIAL = {
  user: {
    loading: true,
    data: {}
  },
  users: {
    loading: true,
    data: []
  }
}

export default (state = INITIAL, action) => {
  switch (action.type) {
    case Types.FETCH_USERS:
      return { ...state, users: { loading: false, data: action.payload } };
    default:
      return state;
  }
};
