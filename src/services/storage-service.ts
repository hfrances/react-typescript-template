import { LANGUAGE, AUTH_TOKEN } from '../constants';
import { AuthorityToken } from '../types';

//**Nos devuelve el token JWT para llamar al backend*/
const getToken = (): (AuthorityToken | null) => {
  let value = localStorage.getItem(AUTH_TOKEN);

  if (value) {
    return JSON.parse(value) as AuthorityToken;
  }
  else {
    return null;
  }
}

/**Nos devuelve el idioma de la PDA*/
const getLanguage = () => {
  if (!localStorage.getItem(LANGUAGE)) {
    // TODO: setLanguage(getBrowserLang());
  }
  return localStorage.getItem(LANGUAGE);
}

/** Almacenamos el idioma de la PDA */
const setLanguage = (value: string): void => localStorage.setItem(LANGUAGE, value);

/** Almacenamos el token JWT que identificará al usuario en el backend */
const setToken = (value: AuthorityToken | null): void => localStorage.setItem(AUTH_TOKEN, value ? JSON.stringify(value) : null as unknown as string);

/** Servicio dedicado a gestionar el localStorage del navegador */
const singleton = {
  getToken,
  setToken,
  getLanguage,
  setLanguage,
};

export { singleton as StorageService };
export default singleton;