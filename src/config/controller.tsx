export const loginController = async ({
    data,
  }: {
    data: LoginData;
  }): Promise<ApiResponse<ILoginResponse>> => {
    return apiCaller({
      uri: "/auth/signIn",
      method: "POST",
      data,
    });
  };