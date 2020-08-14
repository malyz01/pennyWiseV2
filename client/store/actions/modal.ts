import { Types } from '../types';

export const setModal = (name: string, open: boolean) => ({
  type: Types.SET_MODAL,
  payload: { name, open }
});
