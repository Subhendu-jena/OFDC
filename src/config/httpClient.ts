import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import {
  DeleteApiCallerProps,
  ErrorResponse,
  SuccessResponse,
} from '../types/global';

// export const API_BASE_URL = "http://192.168.29.184:3000/api/v1";
// export const API_BASE_URL = "http://localhost:3000/api/v1";
export const API_BASE_URL = 'http://44.209.151.89:3000/api/v1';
// export const STRAPI_API_BASE_URL = "http://localhost:1337";
export const STRAPI_API_BASE_URL = 'http://54.160.82.66:1337';

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
      .then((response) => resolve(response))
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

export const apiCaller = <T>({
  uri,
  method = 'GET',
  data = {},
  // token,
  contentType,
}: ApiCallerProps): Promise<ApiResponse<T>> => {
  return new Promise((resolve, reject) => {
    const config: AxiosRequestConfig = {
      method,
      url: API_BASE_URL + uri,
      withCredentials: true,
      headers: {
        'Content-Type': contentType || 'application/json',
        Accept: '/',
        // Authorization: token ? `Bearer ${token}` : undefined,
      },

      data,
    };
    axios(config)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
};

// export const apiCaller = <T>({
//   uri,
//   method = "GET",
//   data = {},
//   token,
//   contentType,
// }: ApiCallerProps): Promise<ApiResponse<T>> => {
//   // Helper function to get cookie value
//   const getCookie = (name: string): string | undefined => {
//     const value = `; ${document.cookie}`;
//     const parts = value.split(`; ${name}=`);
//     if (parts.length === 2) return parts.pop()?.split(";").shift();
//   };

//   // If no token passed, try to get from cookie
//   const authToken = token || getCookie("auth_token");

//   // Optionally store it in sessionStorage
//   if (authToken) {
//     sessionStorage.setItem("token", authToken);
//   }

//   const config: AxiosRequestConfig = {
//     method,
//     url: API_BASE_URL + uri,
//     headers: {
//       "Content-Type": contentType || "application/json",
//       Accept: "*/*",
//       Authorization: authToken ? `Bearer ${authToken}` : undefined,
//     },
//     withCredentials: true,
//     data,
//   };

//   return axios(config)
//     .then((response) => response.data)
//     .catch((error) => Promise.reject(error));
// };

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
