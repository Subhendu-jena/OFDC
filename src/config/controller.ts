import { loginData, loginResponse, signupData } from '../types/global';
import { apiCaller, ApiResponse, strapiCaller } from './httpClient';

export const loginController = async ({
  data,
}: {
  data: loginData;
}): Promise<ApiResponse<loginResponse>> => {
  return apiCaller({
    uri: '/user/login',
    method: 'POST',
    data,
  });
};
export const signUpController = async ({
  data,
}: {
  data: signupData;
}): Promise<ApiResponse<signupData>> => {
  return apiCaller({
    uri: '/user/register',
    method: 'POST',
    data,
  });
};

export const getAllBoardofDirectors = async (): Promise<ApiResponse<[]>> => {
  return strapiCaller({
    uri: `/api/board-of-directors?populate=*`,
  });
};
export const getAllFormerChairpersons = async (): Promise<ApiResponse<[]>> => {
  return strapiCaller({
    uri: `/api/former-chairpersons?populate=*`,
  });
};
export const getAllManagingDirectors = async (): Promise<ApiResponse<[]>> => {
  return strapiCaller({
    uri: `/api/former-managing-directors?populate=*`,
  });
};
