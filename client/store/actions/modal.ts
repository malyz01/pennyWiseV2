import { Types } from '../types';
import { IPayload } from '../reducers/modal';

export const setModal = (payload: IPayload) => ({
  type: Types.SET_MODAL,
  payload
});
