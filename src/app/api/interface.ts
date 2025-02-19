import { AxiosBasicCredentials, AxiosRequestConfig } from "axios";

export interface ICustomAxiosRequestConfig
  extends Omit<AxiosRequestConfig, "auth"> {
  requiresAuth?: boolean | AxiosBasicCredentials;
}
export interface IApiError {
  message: string;
  statusCode?: number;
  errors?: Record<string, string[]>;
}
