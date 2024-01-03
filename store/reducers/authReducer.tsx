import authTypes from '../types/authTypes';

const initialState = {
  isLogin: false,
  userData: undefined,
  isLoading: false,
  error: undefined,
};

// ?? for every state change there will be new type defined
// ?? and for every offline commit type we will have to setup each new type for every state

function authReducer(state = initialState, action: any) {
  switch (action.type) {
    case authTypes.LOGIN:
      return {...state, isLoading: true};
    case authTypes.LOGIN_FAILURE:
      console.log('LOGIN LOGIN_FAILURE', action);
      return {...state, isLoading: false, error: action.error};
    case authTypes.LOGIN_SUCCESS:
      console.log('LOGIN SUCCESS');

      return {
        ...state,
        isLoading: false,
        error: undefined,
        isLogin: true,
        userData: action.payload,
      };
    case authTypes.LOGIN_COMMIT:
      console.log('LOGIN COMMIT');
      return {...state};
    case authTypes.LOGIN_ROLLBACK:
      console.log('LOGIN ROLLBACK');

      return {...state};

    default:
      return state;
  }
}

export default authReducer;
