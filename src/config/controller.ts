import {
  contactUsData,
  loginData,
  loginResponse,
  signupData,
} from '../types/global';
import { apiCaller, ApiResponse } from './httpClient';
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
export const contactUs = async ({
  data,
}: {
  data: contactUsData;
}): Promise<ApiResponse<signupData>> => {
  return apiCaller({
    uri: '/mail/send-message',
    method: 'POST',
    data,
  });
};
export const bookingForm = async ({
  token,
  data,
}: {
  data: any;
  token: string | null;
}): Promise<ApiResponse<signupData>> => {
  return apiCaller({
    uri: '/booking/create-booking',
    method: 'POST',
    data,
    token,
  });
};
export const getAllSlotByDate = async ({
  token,
  date,
}: {
  token: string | null;
  date: string;
}): Promise<ApiResponse<signupData>> => {
  return apiCaller({
    uri: `/booking/get-all-slot-by-date/${date}`,
    method: 'GET',
    token,
  });
};
