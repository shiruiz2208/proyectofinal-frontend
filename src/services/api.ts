import axios from 'axios';

const BASE_URL_API = import.meta.env.VITE_BACKEND_API_URL;

export const api = axios.create({
  baseURL: BASE_URL_API,
});

export const setAuthentication = (accessToken: string) => {
  api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

export const saveTokenAuthentication = (accessToken: string, user: string) => {
  sessionStorage.setItem('accessToken', accessToken);
  sessionStorage.setItem('user', JSON.stringify(user));
};
