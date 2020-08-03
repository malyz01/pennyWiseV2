import { Types } from '../types';

const INITIAL = {
  all: {
    loading: true,
    data: []
  },
  selected: {
    loading: true,
    data: {}
  }
};

export default (state = INITIAL, action) => {
  switch (action.type) {
    case Types.FETCH_USERS:
      return { ...state, all: { loading: false, data: action.payload } };
    default:
      return state;
  }
};
