import { gql } from '@apollo/client';

import { Types } from '../types';
import client from '../../graphql';
import { setError } from './error'

const setReducer = (type: Types, payload: any) => ({ type, payload });

export const fetchUsers = () => async (dispatch) => {
  try {
    const r = await client.query({
      query: gql`
      query fetchUsers {
        users { 
          id email profile {
            id fullName avatar
          }
        }
      }
    `
    });
    dispatch(setReducer(Types.FETCH_USERS, r.data.users));
  } catch (e) {
    setError(e.message)(dispatch)
  }
};
