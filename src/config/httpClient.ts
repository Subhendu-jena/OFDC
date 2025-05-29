import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import {
  DeleteApiCallerProps,
  ErrorResponse,
  SuccessResponse,
} from '../types/global';
import { decryptData, encryptData } from './cryptoUtils';

// export const API_BASE_URL = "http://192.168.29.184:3000/api/v1";
export const API_BASE_URL = 'http://localhost:3000/api/v1';
// export const API_BASE_URL = 'http://44.209.151.89:3000/api/v1';
// export const API_BASE_URL = 'https://ofdc-portal.octamy.com/api/v1';
// export const STRAPI_API_BASE_URL = "http://localhost:1337";
// export const STRAPI_API_BASE_URL = 'http://54.160.82.66:1337';
export const STRAPI_API_BASE_URL = 'https://ofdcadm.octamy.com';

export type ApiResponse<T> = SuccessResponse<T> | ErrorResponse<T>;
export const deleteApicaller = <T>({
  uri,
  token,
}: DeleteApiCallerProps): Promise<AxiosResponse<ApiResponse<T>>> => {
  return new Promise((resolve, reject) => {
    const config: AxiosRequestConfig = {
      method: 'delete',
      url: API_BASE_URL + uri,
      headers: {
        Authorization: token ? `Bearer ${token}` : undefined,
      },
    };

    axios(config)
      .then((response) => {
        const decrypted = decryptData<ApiResponse<T>>(response.data.payload);
        resolve({ ...response, data: decrypted });
      })
      .catch((error) => reject(error));
  });
};
interface ApiCallerProps {
  uri: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  data?: object;
  token?: string | null | number;
  contentType?: string;
  userId?: string | null | number;
}

export const apiCaller = async <T>({
  uri,
  method = 'GET',
  data = {},
  token,
  contentType,
}: ApiCallerProps): Promise<ApiResponse<T>> => {
  return new Promise((resolve, reject) => {
    const encryptedPayload = encryptData(data);
    // console.log(encryptedPayload, "encryptedPayload");

    const config: AxiosRequestConfig = {
      method,
      url: API_BASE_URL + uri,
      withCredentials: true,
      headers: {
        'Content-Type': contentType || 'application/json',
        Accept: '/',
        Authorization: token ? `Bearer ${token}` : undefined,
      },
      data: method !== 'GET' ? { data: encryptedPayload } : undefined,
      params: method === 'GET' ? data : undefined,
    };
    axios(config)
      .then((response) => {
        const decrypted = decryptData<ApiResponse<T>>(response?.data?.data);
        resolve(decrypted);
        console.log(decrypted, ' decrypted');
      })
      .catch((error) => {
        const decrypted = decryptData<ErrorResponse<T>>(error?.response?.data?.data);
        reject(decrypted);
        console.log(decrypted, 'decrypted error');
      });
  });
};

export const strapiCaller = <T>({
  uri,
  method = 'GET',
  data = {},
  token,
  contentType,
}: ApiCallerProps): Promise<ApiResponse<T>> => {
  return new Promise((resolve, reject) => {
    const config: AxiosRequestConfig = {
      method,
      url: STRAPI_API_BASE_URL + uri,
      headers: {
        'Content-Type': contentType || 'application/json',
        Accept: '/',
        Authorization: token ? `Bearer ${token}` : undefined,
      },
      data,
    };

    // console.log(config, ":config");

    axios(config)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
};

export const HttpClient = {
  apiCaller,
  API_BASE_URL,
  deleteApicaller,
};
