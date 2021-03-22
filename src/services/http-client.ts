import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios';
import { ALERT_SEVERITY_ERROR } from '../constants';
import store, { setAlert } from '../store';

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
    if (!config.withCredentials) {
      config.headers['Authorization'] = `Bearer ${store.getState().authority?.token?.accessToken}`;
    }
    return config;
  };

  private _handleResponse = (response: AxiosResponse) => response;

  protected _handleError = (error: AxiosError): Promise<AxiosError> => {
    console.error('http-client', 'fetch error', error, error.toJSON());
    store.dispatch(setAlert({
      severity:ALERT_SEVERITY_ERROR,
      message: error.message,
      details: error.toJSON(),
      timeout: 5000,
      visible: true
    }));
    return Promise.reject(error.response)
  };

}

export default HttpClient;