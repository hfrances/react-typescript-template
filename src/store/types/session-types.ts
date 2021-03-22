import { Session } from "../../types";

export const SET_LANGUAGE = 'SET_LANGUAGE';

interface SetLanguage {
    type: typeof SET_LANGUAGE;
    payload: string | undefined;
}

export type SessionTypes = SetLanguage;

export interface SessionState extends Session {}