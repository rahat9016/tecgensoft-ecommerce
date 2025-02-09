import axios from 'axios';
// import { getAuthToken, setAuthToken, clearAuthToken, isTokenExpired } from './auth';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Required for cookies/session-based auth
});

// Request Interceptor
// axiosInstance.interceptors.request.use(
//   async (config: { auth: boolean; headers: { Authorization: string; }; }) => {
//     if (config.auth === false) {
//       return config;
//     }
//     let token = getAuthToken();
//     if (token && isTokenExpired(token)) {
//       try {
//         const { data } = await axios.post(`${BASE_URL}/auth/refresh`, {}, { withCredentials: true });
//         setAuthToken(data.accessToken);
//         token = data.accessToken;
//       } catch (refreshError) {
//         clearAuthToken();
//         return Promise.reject(refreshError);
//       }
//     }
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error: any) => Promise.reject(error)
// );

// export default axiosInstance;
