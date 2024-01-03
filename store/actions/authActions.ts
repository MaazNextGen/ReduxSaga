import authTypes from '../types/authTypes';

export const login = (data: any) => ({
  type: authTypes.LOGIN,
  payload: data,
  meta: {
    offline: {
      // the network action to execute:
      effect: {
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'POST',
        json: {...data},
      },
      // action to dispatch when effect succeeds:
      commit: {type: authTypes.LOGIN_COMMIT, meta: {...data}},
      // action to dispatch if network action fails permanently:
      rollback: {type: authTypes.LOGIN_ROLLBACK, meta: {...data}},
    },
  },
});

export const loginSuccess = (data: any) => ({
  type: authTypes.LOGIN_SUCCESS,
  payload: data,
});

export const loginFailure = () => ({
  type: authTypes.LOGIN_FAILURE,
});
