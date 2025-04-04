import { loginData, loginResponse, signupData } from "../types/global";
import { apiCaller, ApiResponse } from "./httpClient";

export const loginController = async ({
    data,
  }: {
    data: loginData;
  }): Promise<ApiResponse<loginResponse>> => {
    return apiCaller({
      uri: "/user/login",
      method: "POST",
      data,
    });
  };
  export const signUpController = async ({
    data,
  }: {
    data: signupData;
  }): Promise<ApiResponse<signupData>> => {
    return apiCaller({
      uri: "/user/register",
      method: "POST",
      data,
    });
  };