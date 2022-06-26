import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./actionType";

export const loginSuccess = (token) => {
  return {
    type: LOGIN_SUCCESS,
    payload: token
  };
};
export const loginFailure = (err) => {
  return {
    type: LOGIN_FAILURE,
    payload: err
  };
};
