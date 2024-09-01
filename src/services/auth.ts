import { api } from './api';
import { LOGIN_API_PATH, REGISTER_API_PATH } from './path';

export const login = async (userInfo: any) => {
  const { data } = await api.post(`${LOGIN_API_PATH}`, userInfo);

  return data;
};

export const register = async (userInfo: any) => {
  const { data } = await api.post(`${REGISTER_API_PATH}`, userInfo);

  return data;
};
