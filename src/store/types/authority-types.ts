import { Authority, CurrentUser, AuthorityToken } from "../../types";

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const SET_TOKEN = 'SET_TOKEN';

interface SetCurrentUser {
  type: typeof SET_CURRENT_USER;
  payload: CurrentUser | null;
}

interface SetToken {
  type: typeof SET_TOKEN;
  payload: AuthorityToken | null;
}

export type AuthorityTypes = SetCurrentUser | SetToken;

export interface AuthorityState extends Authority { }