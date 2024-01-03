import {combineReducers} from '@reduxjs/toolkit';
import authReducer from './authReducer';
import authTypes from '../types/authTypes';

const combinedReducers = combineReducers({
  auth: authReducer,
});

const rootReducer = (state, action) => {
  // when a logout action is dispatched it will reset redux state
  if (action.type === authTypes.RESET) {
    return combinedReducers(undefined, action);
  }

  return combinedReducers(state, action);
};

// exports
export default rootReducer;
