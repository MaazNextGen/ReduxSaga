import authTypes from '../types/authTypes';

export const login = (data: any) => ({
  type: authTypes.LOGIN,
  payload: data,
});

export const loginSuccess = (data: any) => ({
  type: authTypes.LOGIN_SUCCESS,
  payload: data,
});

export const loginFailure = () => ({
  type: authTypes.LOGIN_FAILURE,
});
