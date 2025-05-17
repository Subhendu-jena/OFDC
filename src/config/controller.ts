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
export const createBooking = async ({
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
export const createOrder = async ({
  token,
  data,
  id
}: {
  data: any;
  token: string | null;
  id:string 
}): Promise<ApiResponse<signupData>> => {
  return apiCaller({
    uri: `/payment/create-order/${id}`,
    method: 'POST',
    data,
    token,
  });
};
export const verifyOrder = async ({
  token,
  data
}:{data:any;
  token: string | null;
}): Promise<ApiResponse<signupData>> => {
  return apiCaller({
    uri: `/payment/verify-payment`,
    method: 'POST',
    token,
   data,
  });
};
export const userCancel = async ({
  token,
 id
}:{
  token: string | null;
  id:string
}): Promise<ApiResponse<signupData>> => {
  return apiCaller({
    uri: `/booking/cancel/${id}`,
    method: 'PATCH',
    token,
  });
};
export const adminApprove = async ({
  token,
  id
}:{data:any;
  token: string | null;
  id:string
}): Promise<ApiResponse<signupData>> => {
  return apiCaller({
    uri: `/booking/approve/${id}`,
    method: 'PATCH',
    token,
  //  data,
  });
};
export const adminReject = async ({
  token,
  id
}:{
  token: string | null;
  id:string
}): Promise<ApiResponse<any>> => {
  return apiCaller({
    uri: `/booking/reject/${id}`,
    method: 'PATCH',
    token,
  //  data,
  });
};
export const refund = async ({
  token,
  id
}:{
  token: string | null;
  id:string
}): Promise<ApiResponse<any>> => {
  return apiCaller({
    uri: `/payment/refund/${id}`,
    method: 'POST',
    token,
  //  data,
  });
};
export const checkCorrectPassword = async ({
  token,
  data
}:{
  data: any;
  token: string | null;
}): Promise<ApiResponse<loginResponse>> => {
  return apiCaller({
    uri: `/user/check-password`,
    method: 'POST',
    token,
   data,
  });
};
export const updateUser = async ({
  token,
  data
}:{
  data: any;
  token: string | null;
}): Promise<ApiResponse<loginResponse>> => {
  return apiCaller({
    uri: `/user/updateUser`,
    method: 'PUT',
    token,
   data,
  });
};
export const forgotPassword = async ({
  data
}:{
  data: any;
}): Promise<ApiResponse<any>> => {
  return apiCaller({
    uri: `/user/forgot-password`,
    method: 'POST',
    data
  });
};
export const resetPassword = async ({
  token,data
}:{
  token: any;
  data: any;
}): Promise<ApiResponse<any>> => {
  return apiCaller({
    uri: `/user/reset-password/${token}`,
    method: 'POST',
    data
  });
};

export const getAllSlotByDate = async ({
  token,
  date,
}: {
  token: string | null;
  date: string;
}): Promise<ApiResponse<any>> => {
  return apiCaller({
    uri: `/booking/get-all-slot-by-date/${date}`,
    method: 'GET',
    token,
  });
};
export const getAllBookingsOfUser = async ({
  token,
  userId,
}: {
  token: string | null;
  userId: string;
}): Promise<ApiResponse<any>> => {
  return apiCaller({
    uri: `/booking/get-all-bookings-user/${userId}`,
    method: 'GET',
    token,
  });
};
export const getAllPaymentsOfUser = async ({
  token,
}: {
  token: string | null;
}): Promise<ApiResponse<any>> => {
  return apiCaller({
    uri: `/payment/all_user_payments`,
    method: 'GET',
    token,
  });
};
export const getAllBookingsForAdmin = async ({
  token,
}: {
  token: string | null;
}): Promise<ApiResponse<any>> => {
  return apiCaller({
    uri: `/booking/get-all-booked-data`,
    method: 'GET',
    token,
  });
};
