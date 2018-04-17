import { USER_LOGIN, USER_LOGOUT } from '../../actionTypes';

export const userLogin = () => ({
  type: USER_LOGIN,
});

export const userLogout = () => ({
  type: USER_LOGOUT,
});
