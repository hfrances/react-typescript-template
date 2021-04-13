import { LANGUAGE, AUTH_TOKEN, USE_DEBUG } from '../constants';
import { AuthorityToken } from '../types';

const getUseDebug = () : (boolean | undefined) => {
  let sessionValue = sessionStorage.getItem(USE_DEBUG);
  let localValue = localStorage.getItem(USE_DEBUG);

  if (sessionValue) {
    return JSON.parse(sessionValue) as boolean;
  }
  else if (localValue) {
    return JSON.parse(localValue) as boolean;
  }
  else {
    return undefined;
  }
}

/** Nos devuelve el token JWT para llamar al backend */
const getToken = (): (AuthorityToken | null) => {
  let value = localStorage.getItem(AUTH_TOKEN);

  if (value) {
    return JSON.parse(value) as AuthorityToken;
  }
  else {
    return null;
  }
}

/** Almacenamos el token JWT que identificará al usuario en el backend */
const setToken = (value: AuthorityToken | null): void => localStorage.setItem(AUTH_TOKEN, value ? JSON.stringify(value) : null as unknown as string);

/** Nos devuelve el idioma de la aplicación */
const getLanguage = () => {
  if (!localStorage.getItem(LANGUAGE)) {
    // TODO: setLanguage(getBrowserLang());
  }
  return localStorage.getItem(LANGUAGE);
}

/** Almacenamos el idioma de la PDA */
const setLanguage = (value: string): void => localStorage.setItem(LANGUAGE, value);

/** Servicio dedicado a gestionar el localStorage del navegador */
const singleton = {
  getUseDebug,
  getToken,
  setToken,
  getLanguage,
  setLanguage,
};

export { singleton as StorageService };
export default singleton;