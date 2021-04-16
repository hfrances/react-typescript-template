import HttpClient from './http-client';
import { CommonHelper } from '../helpers';
import { CredentialsDto, AuthorityToken } from '../types';
import https from 'https';

class AuthService extends HttpClient {
  public constructor() {
    super(CommonHelper.combineUrl(
      (window.location.protocol === 'https:' ? process.env.REACT_APP_API_URL_LOGIN_HTTPS : process.env.REACT_APP_API_URL_LOGIN) as string,
      'auth')
    );
  }

  public get = async (): Promise<any> => {
    return await
      this.instance.get<any>('')
        .then(response => {
          return response.data;
        })
        .catch(err => {
          console.error("get", "fetch error:", err);
          throw err;
        });
  }

  public getCredentials = async (token: AuthorityToken | undefined): Promise<CredentialsDto> => {
    let authorization = (token ? { Authorization: `Bearer ${token.accessToken}` } : null);

    return await
      this.instance.get<CredentialsDto>('', {
        headers: { ...authorization }
      })
        .then(response => {
          return response.data;
        })
        .catch(err => {
          console.error("get", "fetch error:", err);
          throw err;
        });
  }

  public createTokenNtlm = async (): Promise<AuthorityToken> => {
    return await
      this.instance.post<AuthorityToken>('create-token/ntlm', {}, {
        headers: { 'Content-Type': 'application/json' }, withCredentials: true
      })
        .then(response => {
          return response.data;
        })
        .catch(err => {
          console.error("create-token", "ntlm", "fetch error:", err);
          throw err;
        });
  }

  public createTokenMsal = async (): Promise<AuthorityToken> => {
    return await
      this.instance.post<AuthorityToken>('create-token/msal', {})
        .then(response => {
          return response.data;
        })
        .catch(err => {
          console.error("create-token", "msal", "fetch error:", err);
          throw err;
        });
  }

  public createTokenHash = async (): Promise<AuthorityToken> => {
    return await
      this.instance.post<AuthorityToken>('create-token/hash', {})
        .then(response => {
          return response.data;
        })
        .catch(err => {
          console.error("create-token", "hash", "fetch error:", err);
          throw err;
        });
  }

}

const singleton = new AuthService();

export { singleton as AuthService };
export default singleton;