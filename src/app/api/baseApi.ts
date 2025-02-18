
// import { getCookie, isCookieExpired, setCookie } from '@/lib/cookie';
import axios from 'axios';
// const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const BASE_URL = 'http://tecgensoft.com';

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Token management variables
// let isAuthenticating = false;
// let pendingAuthPromise: Promise<string | null> | null = null;

// const refreshAuthToken = async (): Promise<string | null> => {
//     const refreshToken = getCookie("refreshToken");

//     if (!refreshToken || isCookieExpired("refreshToken")) {
//         console.warn("Refresh token missing or expired");
//         return null; // Handle logout in the UI if needed
//     }

//     try {
//         const response = await api.post('/authenticate/refresh', { refreshToken });
//         const { jwtToken } = response.data;
//         setCookie("jwtToken", jwtToken, 100); // 1 hour
//         return jwtToken;
//     } catch (error) {
//         console.error("Token refresh failed:", error);
//         return null;
//     }
// };

// const getToken = async (): Promise<string | null> => {
//     let token = getCookie("jwtToken");

//     if (!token || isCookieExpired("jwtToken")) {
//         if (!isAuthenticating) {
//             isAuthenticating = true;
//             pendingAuthPromise = (async () => {
//                 try {
//                     return await refreshAuthToken();
//                 } catch (error) {
//                     console.error("Authentication error:", error);
//                     return null;
//                 } finally {
//                     isAuthenticating = false;
//                     pendingAuthPromise = null;
//                 }
//             })();
//         }
//         token = await pendingAuthPromise;
//     }

//     return token;
// };

// Axios request interceptor to inject the token
api.interceptors.request.use(
    async (config) => {
        // console.log('config--------->', config)
        // if (config.url !== '/authenticate' && config.url !== '/authenticate/refresh') {
        //     const token = await getToken();
        //     if (token) {
        //         config.headers.Authorization = `Bearer ${token}`;
        //     }
        // }
        return config;
    },
    (error) => Promise.reject(error)
);

export default api;


