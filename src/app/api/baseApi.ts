// import { getCookie, isCookieExpired, setCookie } from '@/lib/cookie';
import axios from "axios";
import { excludedRoutes } from "./routes";
import { getCookie, isCookieExpired, setCookie } from "@/lib/cookie";
// const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const BASE_URL = "http://tecgensoft.com";

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
console.log('refresh token', refreshToken)
  if (!refreshToken || isCookieExpired("refresh")) {
    console.warn("Refresh token missing or expired");
    return null; // Handle logout in the UI if needed
  }

  try {
    const response = await api.post("/user/refresh-token/", { refreshToken });
    console.log(response)
    const { jwtToken } = response.data;
    setCookie("jwtToken", jwtToken, 10); // 1 hour
    return jwtToken;
  } catch (error) {
    console.error("Token refresh failed:", error);
    return null;
  }
};

const getToken = async (): Promise<string | null> => {
  let token = getCookie("access");
    console.log('token', token)
    console.log('isCookieExpired("access")----->', isCookieExpired("access"))
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
    console.log('checking')
    token = await pendingAuthPromise;
  }

  return token;
};

// Axios request interceptor to inject the token
api.interceptors.request.use(
  async (config) => {
    if (!excludedRoutes.includes(config.url || "")) {
      const token = await getToken();
      console.log("token-------->",  token);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }else {
        // window.alert('Token no in cookie, please logout')
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
