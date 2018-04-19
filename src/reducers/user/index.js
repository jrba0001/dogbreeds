import { USER_LOGIN, USER_LOGOUT } from '../../actionTypes';

const initialState = {
  isLogged: false,
};

const userReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case USER_LOGIN:
      return { ...state, isLogged: true };
    case USER_LOGOUT:
      return { ...state, isLogged: false };
    default:
      return state;
  }
};

export default userReducer;
