import { SessionState, SessionTypes, SET_LANGUAGE } from '../types/session-types';

const initialState: SessionState = {
  language: undefined,
}

const sessionReducer = (state: SessionState = initialState, action: SessionTypes): SessionState => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload
      }
    default:
      return state;
  }
}

export { sessionReducer }
export default sessionReducer;