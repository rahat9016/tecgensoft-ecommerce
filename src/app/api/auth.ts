import { AxiosError, AxiosResponse } from "axios";
import api from "./baseApi";
import { setCookie } from "@/lib/cookie";

interface IApiError {
  message: string;
  statusCode?: number;
  errors?: Record<string, string[]>;
}
interface IAuthResponse {
  username: string;
  email: string;
  token: {
    access: string;
    refresh: string;
  };
}
export const signing = async () => {
  try {
    const response: AxiosResponse<IAuthResponse> = await api.post(
      "/user/signin/",
      {
        username: "minhazur9016",
        password: "1",
      }
    );
    if (response.status === 201) {
      // Set login information in cookie.
      const {
        token: { access, refresh },
        username,
        email,
      } = response.data;
      setCookie("access", access, 10);
      setCookie("refresh", refresh, 10);
      const userInfo = {
        email: email,
        username: username,
      };
      setCookie("userInformation", JSON.stringify(userInfo), 10);
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
