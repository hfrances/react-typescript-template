import { AuthorityState, AuthorityTypes, SET_CURRENT_USER, SET_TOKEN } from '../types/authority-types';

const initialState: AuthorityState = {
  currentUser: null,
  token: null,
}

const authorityReducer = (state: AuthorityState = initialState, action: AuthorityTypes): AuthorityState => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      }
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload
      }
    default:
      return state;
  }
}

export { authorityReducer }
export default authorityReducer;