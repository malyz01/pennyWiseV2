import { Types } from '../types';

const INITIAL: IPayload = {
  name: '',
  open: false
};

export interface IPayload {
  name: string;
  open: boolean;
}

interface IAction {
  type: Types;
  payload: IPayload;
}

export default (state: IPayload = INITIAL, action: IAction) => {
  switch (action.type) {
    case Types.SET_MODAL:
      return action.payload;
    default:
      return state;
  }
};
