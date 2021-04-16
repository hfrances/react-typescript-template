import HttpClient from './http-client';
import { CommonHelper } from '../helpers';
import { CredentialsDto, AuthorityToken } from '../types';
import https from 'https';

class AuthServiceCert extends HttpClient {
  public constructor() {
    super(CommonHelper.combineUrl(process.env.REACT_APP_API_URL_LOGIN_CERT as string, 'auth'));
  }

  public createTokenCert = async (): Promise<AuthorityToken> => {
    let httpAgent = new https.Agent({
      requestCert: true
    });

    return await
      this.instance.post<AuthorityToken>('create-token/cert', {}, {
        httpAgent    
      })
        .then(response => {
          return response.data;
        })
        .catch(err => {
          console.error("create-token", "cert", "fetch error:", err);
          throw err;
        });
  }

}

const singleton = new AuthServiceCert();

export { singleton as AuthServiceCert };
export default singleton;