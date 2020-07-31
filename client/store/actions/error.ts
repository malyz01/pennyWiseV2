import { Types } from '../types'

export const setError = (err: string) => dispatch => {
  dispatch({ type: Types.SET_ERROR, payload: err })
}