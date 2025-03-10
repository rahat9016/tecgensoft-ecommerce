/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { InternalAxiosRequestConfig } from "axios";
import { getCookie, isCookieExpired, setCookie } from "@/lib/cookie";
import { ICustomAxiosRequestConfig } from "./interface";
// const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const BASE_URL = "https://tecgensoft.com";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Token management variables
let isAuthenticating = false;
let pendingAuthPromise: Promise<string | null> | null = null;

const refreshAuthToken = async (): Promise<string | null> => {
  const refreshToken = getCookie("refresh");
  if (!refreshToken || isCookieExpired("refresh")) {
    console.warn("Refresh token missing or expired");
    return null;
  }
  try {
    const response = await api.post("/user/refresh-token/", {
      refresh: refreshToken,
    });
    const { access } = response.data;
    setCookie("access", access, 10);
    return access;
  } catch (error) {
    console.error("Token refresh failed:", error);
    return null;
  }
};

const getToken = async (): Promise<string | null> => {
  let token = getCookie("access");
  if (!token || isCookieExpired("access")) {
    if (!isAuthenticating) {
      isAuthenticating = true;
      pendingAuthPromise = (async () => {
        try {
          return await refreshAuthToken();
        } catch (error) {
          console.error("Authentication error:", error);
          return null;
        } finally {
          isAuthenticating = false;
          pendingAuthPromise = null;
        }
      })();
    }
    token = await pendingAuthPromise;
  }

  return token;
};

api.interceptors.request.use(
  async (config) => {
    const customConfig = config as ICustomAxiosRequestConfig;
    const authRequired = customConfig.authRequired === true;

    if (authRequired) {
      const token = await getToken();
      if (token) {
        customConfig.headers = {
          ...customConfig.headers,
          Authorization: `Bearer ${token}`,
        };
      } else {
        console.warn('No token available, authorization might fail');
      }
    }

    return customConfig as InternalAxiosRequestConfig<any>;
  },
  (error) => Promise.reject(error)
);
export default api;
