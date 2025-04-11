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

export const contact = async (): Promise<ApiResponse<[]>> => {
  return strapiCaller({
    uri: `/api/contactss?populate=*`,
  });
};
export const getAllBoardofDirectors = async (): Promise<ApiResponse<[]>> => {
  return strapiCaller({
    uri: `/api/board-of-directors?populate[boardOfDirectors][populate]=*`,
  });
};
export const getAllFormerChairpersons = async (): Promise<ApiResponse<[]>> => {
  return strapiCaller({
    uri: `/api/former-chairpersons?populate[formerChairpersons][populate]=*`,
  });
};
export const getAllManagingDirectors = async (): Promise<ApiResponse<[]>> => {
  return strapiCaller({
    uri: `/api/former-managing-directors?populate[formerManagingDirectors][populate]=*`,
  });
};
export const herosection = async (): Promise<ApiResponse<[]>> => {
  return strapiCaller({
    uri: `/api/hero-sections?populate=*`,
  });
};
export const leaderships = async (): Promise<ApiResponse<[]>> => {
  return strapiCaller({
    uri: `/api/leaderships?populate[mainDescription]=*&populate[managingDirector][populate]=imageUrl&populate[chairman][populate]=imageUrl&populate[independentDirector][populate]=imageUrl&populate[nomineeDirectors][populate]=imageUrl`,
  });
};
export const latestNews = async (): Promise<ApiResponse<[]>> => {
  return strapiCaller({
    uri: `/api/latest-newss`,
  });
};
export const odishaStories = async (): Promise<ApiResponse<[]>> => {
  return strapiCaller({
    uri: `/api/odisha-stories?populate=*`,
  });
};
export const locationDirectory = async (): Promise<ApiResponse<[]>> => {
  return strapiCaller({
    uri: `/api/location-directories?populate[locations][populate]=image`,
  });
};
export const talentDirectory = async (): Promise<ApiResponse<[]>> => {
  return strapiCaller({
    uri: `/api/talent-directories?populate[talentDirectory][populate]=image`,
  });
};
export const equipmentDirectory = async (): Promise<ApiResponse<[]>> => {
  return strapiCaller({
    uri: `/api/equipment-directories?populate[equipmentDirectory][populate]=image`,
  });
};
export const testimonialsApi = async (): Promise<ApiResponse<[]>> => {
  return strapiCaller({
    uri: `/api/testimonialss?populate[testimonials][populate]=image`,
  });
};
