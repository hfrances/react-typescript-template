import HttpClient from './http-client';
import { CommonHelper } from '../helpers';

class SampleService extends HttpClient {
  public constructor() {
    super(CommonHelper.combineUrl(process.env.REACT_APP_API_URL as string, 'sample'));
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
}

const singleton = new SampleService();

export { singleton as SampleService };
export default singleton;