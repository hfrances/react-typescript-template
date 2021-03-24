import { AlertSeverityTypes } from "../constants";

export interface Alert {
  severity: AlertSeverityTypes | undefined;
  message: string | undefined;
  details: any | undefined;
  timeout: number;
  visible: boolean;
}