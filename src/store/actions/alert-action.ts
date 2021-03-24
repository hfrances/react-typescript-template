import { AlertTypes, SET_ALERT, SET_ALERT_HIDDEN } from '../types/alert-types';
import { Alert } from '../../types';

export const setAlert = (alert: Alert): AlertTypes => {
  return {
    type: SET_ALERT,
    payload: alert
  };
}

export const setAlertHidden = (): AlertTypes => {
  return {
    type: SET_ALERT_HIDDEN,
    payload: undefined
  };
}
