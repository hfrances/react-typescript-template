import HttpClient from './http-client';
import { UrlHelper } from '../helpers';

class SampleService extends HttpClient {
  public constructor() {
    super(UrlHelper.combineUrl(process.env.REACT_APP_API_URL as string, 'sample'));
  }

  public get = async (token: string): Promise<any> => {
    return await
      this.instance.get<any>('',
        { headers: { "Authorization": `Bearer ${token}` } }
      )
        .then(response => {
          return response.data;
        })
        .catch(err => {
          console.error("get", "fetch error:", err);
          throw err;
        });
  }
}

const singleton = new SampleService();

export default singleton;
export { singleton as SampleService };