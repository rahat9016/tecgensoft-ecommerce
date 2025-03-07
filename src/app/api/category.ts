import { AxiosError } from "axios";
import api from "./baseApi";
import { IApiError, ICustomAxiosRequestConfig } from "./interface";

export const getCategory = async () => {
  try {
    const response = await api.get("/catalog/attribute-create/", { authRequired: true } as ICustomAxiosRequestConfig);
    if (response.status === 200) {
      return response.data;
    }
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
