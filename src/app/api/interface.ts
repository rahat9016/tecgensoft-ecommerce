import { AxiosBasicCredentials, AxiosRequestConfig } from "axios";

export interface ICustomAxiosRequestConfig extends Omit<AxiosRequestConfig, "auth"> {
    requiresAuth?: boolean | AxiosBasicCredentials;
  }
  