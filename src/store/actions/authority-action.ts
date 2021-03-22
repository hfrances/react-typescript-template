import { AuthorityTypes, SET_CURRENT_USER, SET_TOKEN } from '../types/authority-types';
import { AuthorityToken, CurrentUser } from '../../types';

export const setCurrentUser = (currentUser: CurrentUser | null): AuthorityTypes => {
    return {
        type: SET_CURRENT_USER,
        payload: currentUser
    };
}

export const setToken = (token: AuthorityToken | null): AuthorityTypes => {
    return {
        type: SET_TOKEN,
        payload: token
    };
}
