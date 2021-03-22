import { Alert } from "../../types";

export const SET_ALERT = 'SET_ALERT';
export const SET_ALERT_HIDDEN = 'SET_ALERT_HIDDEN';

interface SetAlert {
    type: typeof SET_ALERT;
    payload: Alert;
}

interface setAlertHidden {
    type: typeof SET_ALERT_HIDDEN;
    payload: undefined;
}

export type AlertTypes = SetAlert | setAlertHidden;

export interface AlertState extends Alert {}