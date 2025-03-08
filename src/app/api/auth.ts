import { AxiosError, AxiosResponse } from "axios";
import api from "./baseApi";
import { setCookie } from "@/lib/cookie";
import { IApiError } from "./interface";

interface IAuthResponse {
  username: string;
  email: string;
  role: string[];
  token: {
    access: string;
    refresh: string;
  };
}
export const signing = async (data: { username: string; password: string }) => {
  try {
    console.log(data);
    const response: AxiosResponse<IAuthResponse> = await api.post(
      "/user/signin/",
      JSON.stringify(data)
    );
    if (response.status === 201) {
      // Set login information in cookie.
      const {
        token: { access, refresh },
        username,
        email,
        role
      } = response.data;
      // console.log(jwtDecode(access))
      setCookie("access", access, 20);
      setCookie("refresh", refresh, 20);
      const userInfo = {
        email: email,
        username: username,
        role: role
      };
      setCookie("userInformation", JSON.stringify(userInfo), 20);
      return response?.data;
    }
    throw new Error("Unexpected response status");
  } catch (error) {
    if (error instanceof AxiosError) {
      const apiError: IApiError = error.response?.data ?? {
        message: "Something went wrong",
      };
      throw apiError;
    }
    throw { message: "Unknown error occurred" } as IApiError;
  }
};
