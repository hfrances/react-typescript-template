import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios';
//import {storageServices} from '.';

declare module 'axios' {
  interface AxiosResponse<T = any> extends Promise<T> { }
}

abstract class HttpClient {

  protected readonly instance: AxiosInstance;

  public constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL
    });

    this._initializeResponseInterceptor();
    this._initializeRequestInterceptor();
  }

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this._handleResponse,
      this._handleError,
    );
  };

  private _initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(
      this._handleRequest,
      this._handleError,
    );
  };

  private _handleRequest = (config: AxiosRequestConfig) => {
    //config.headers['Authorization'] = `Bearer ${storageServices.getToken()}`;
    return config;
  };

  private _handleResponse = (response: AxiosResponse) => response;

  protected _handleError = (error: AxiosError): Promise<AxiosError> => {
    console.error('http-client', 'fetch error', error, error.toJSON());
    return Promise.reject(error.response)
  };

}

export default HttpClient;