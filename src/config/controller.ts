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
  // token,
  data,
}: {
  data: any;
  token: string | null;
}): Promise<ApiResponse<signupData>> => {
  return apiCaller({
    uri: '/booking/create-booking',
    method: 'POST',
    data,
    // token,
  });
};
export const confirmationEmail = async ({
  // token,
  data,
}: {
  data: any;
}): Promise<ApiResponse<signupData>> => {
  return apiCaller({
    uri: '/mail/send_confirmation_email',
    method: 'POST',
    data,
    // token,
  });
};
export const ghostBooking = async ({
  // token,
  data,
}: {
  data: any;
}): Promise<ApiResponse<signupData>> => {
  return apiCaller({
    uri: '/booking/create-ghost-booking',
    method: 'POST',
    data,
    // token,
  });
};
export const createOrder = async ({
  bookingId,
}: {
  data: any;
  bookingId: string;
}): Promise<ApiResponse<signupData>> => {
  return apiCaller({
    uri: `/payment/create-order`,
    method: 'POST',
    data:{bookingId},
  });
};
export const verifyOrder = async ({
  token,
  data,
}: {
  data: any;
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
 data
}: {
data: any;
}): Promise<ApiResponse<signupData>> => {
  return apiCaller({
    uri: `/booking/cancel`,
    method: 'POST',
    data,
  });
};
export const adminApprove = async ({
  data,
}: {
  data: any;
}): Promise<ApiResponse<signupData>> => {
  return apiCaller({
    uri: `/booking/approve`,
    method: 'POST',
     data,
  });
};
export const adminReject = async ({
  data
}: {
  data: any;
}): Promise<ApiResponse<any>> => {
  return apiCaller({
    uri: `/booking/reject`,
    method: 'POST',
     data,
  });
};
export const refund = async ({
  data
}: {
  data: any;
}): Promise<ApiResponse<any>> => {
  return apiCaller({
    uri: `/payment/refund`,
    method: 'POST',
     data,
  });
};
export const changePassword = async ({
  token,
  data,
}: {
  data: any;
  token: string | null;
}): Promise<ApiResponse<loginResponse>> => {
  return apiCaller({
    uri: `/user/changePassword`,
    method: 'POST',
    token,
    data,
  });
};
export const updateUser = async ({
  token,
  data,
}: {
  data: any;
  token: string | null;
}): Promise<ApiResponse<loginResponse>> => {
  return apiCaller({
    uri: `/user/updateUser`,
   method: 'POST',
    token,
    data,
  });
};
export const forgotPassword = async ({
  data,
}: {
  data: any;
}): Promise<ApiResponse<any>> => {
  return apiCaller({
    uri: `/user/forgot-password`,
    method: 'POST',
    data,
  });
};
export const resetPassword = async ({
  token,
}: {
  token: any;
  data: any;
}): Promise<ApiResponse<any>> => {
  return apiCaller({
    uri: `/user/reset-password`,
    method: 'POST',
    data:{token},
  });
};

export const getAllSlotByDate = async ({
  date,
}: {
  date: string;
}): Promise<ApiResponse<any>> => {
  return apiCaller({
    uri: `/booking/get-all-slot-by-date`,
    method: 'POST',
    data: {date},
  });
};
export const getAllBookingsOfUser = async ({
  userId,
}: {
  userId: string;
}): Promise<ApiResponse<any>> => {
  return apiCaller({
    uri: `/booking/get-all-bookings-user`,
    method: 'POST',
    data: { userId },
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
export const getAllBookingsForAdmin = async ({}: {}): Promise<
  ApiResponse<any>
> => {
  return apiCaller({
    uri: `/booking/get-all-booked-data`,
    method: 'GET',
  });
};
export const getAllPaymentsForAdmin = async ({}: {}):
 Promise<ApiResponse<any>> => {
  return apiCaller({
    uri: `/payment/all_payments`,
    method: 'GET',
  });
};
export const dashboardData = async ({}: {}):
 Promise<ApiResponse<any>> => {
  return apiCaller({
    uri: `/booking/getBookingCount`,
    method: 'GET',
  });
};
