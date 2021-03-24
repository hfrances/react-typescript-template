import { SessionTypes, SET_LANGUAGE } from '../types/session-types';

export const setLanguage = (value1: string): SessionTypes => {
  return {
    type: SET_LANGUAGE,
    payload: value1
  };
}