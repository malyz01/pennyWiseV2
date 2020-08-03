import { Types } from '../types'

export default (state: string = '', action: any) => {
  switch (action.type) {
    case Types.SET_ERROR:
      return action.payload
    default:
      return state;
  }
}