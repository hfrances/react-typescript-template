import store, { setToken, setCurrentUser } from '../store';
import { StorageService } from '../services';
import { CurrentUser, AuthorityToken, Authority } from '../types';

class AuthorizationHelper {

  public init = async (): Promise<Authority> => {
    return await this.loadToken()
      .then(async () => {
        return await this.whoAmI()
          .then(() => {
            return store.getState().authority;
          });
      });
  }

  public loadToken = async (): Promise<AuthorityToken | null> => {
    return await new Promise<AuthorityToken | null>((resolve, reject) => {
      let token = StorageService.getToken();

      try {
        store.dispatch(setToken(token));
        resolve(token);
      }
      catch (err) {
        reject(err);
      }
    });
  }

  public whoAmI = async (): Promise<CurrentUser | null> => {
    return await new Promise<CurrentUser | null>((resolve, reject) => {
      let token = StorageService.getToken();
      let result: CurrentUser | null;

      // TODO: replace by bussiness logic.
      try {
        if (token) {
          result = {}
        }
        else {
          result = null
        }
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
    })
      .then(response => {
        store.dispatch(setCurrentUser(response));
        return response;
      })
      .catch(err => {
        if (err.status === 401) {
          console.error("Unkown user");
          return null;
        }
        else {
          throw err;
        }
      });
  }

}

const singleton = new AuthorizationHelper();

export default singleton;
export { singleton as AuthorizationHelper };
