import { AlertState, AlertTypes, SET_ALERT, SET_ALERT_HIDDEN } from '../types/alert-types';
import { Alert } from '../../types';

const initialState: AlertState = {
  severity: undefined,
  message: undefined,
  details: undefined,
  timeout: 5000,
  visible: false
}

const alertReducer = (state: AlertState = initialState, action: AlertTypes): AlertState => {
  switch (action.type) {
    case SET_ALERT:
      return {
        ...action.payload as Alert,
      };
    case SET_ALERT_HIDDEN:
      return initialState;
    default:
      return state;
  }
}

export { alertReducer }
export default alertReducer;