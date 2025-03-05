import { AxiosRequestConfig } from "axios";

export interface IApiError {
  message: string;
  statusCode?: number;
  errors?: Record<string, string[]>;
}
export interface ICustomAxiosRequestConfig extends AxiosRequestConfig {
  authRequired?: boolean;
}