import { api as API } from './api';
import {
  CREATE_USER_API_PATH,
  DELETE_USERS_API_PATH,
  FETCH_USERS_API_PATH,
  UPDATE_USERS_API_PATH,
} from './path';

export const getUsers = async () => {
  const { data } = await API.get(
    `${import.meta.env.REACT_APP_BACKEND_HOST}/${FETCH_USERS_API_PATH}`
  );

  return data;
};

export const createUser = async (createInfo: any) => {
  const { data } = await API.post(
    `${import.meta.env.REACT_APP_BACKEND_HOST}/${CREATE_USER_API_PATH}`,
    createInfo
  );

  return data;
};

export const updateUser = async (updateInfo: any) => {
  const { data } = await API.put(
    `${import.meta.env.REACT_APP_BACKEND_HOST}/${UPDATE_USERS_API_PATH}`,
    updateInfo
  );

  return data;
};

export const deleteUser = async (deleteInfo: any) => {
  const { data } = await API.delete(
    `${import.meta.env.REACT_APP_BACKEND_HOST}/${DELETE_USERS_API_PATH}/${
      deleteInfo.id
    }`
  );

  return data;
};
