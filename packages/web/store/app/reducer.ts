import * as types from './types';

const initialState: types.AppState = {
  isLoading: true,
  token: null,
  user: null
};

const appReducer = (
  state: types.AppState = initialState,
  action
): types.AppState => {
  switch (action.type) {
    case types.APP_INIT:
      return state;
    case types.APP_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case types.APP_LOADED:
      return {
        ...state,
        isLoading: false
      };
    case types.RECEIVE_USER:
      return {
        ...state,
        token: action.token,
        user: action.user
      };
    case types.LOGOUT:
      return {
        ...state,
        token: initialState.token,
        user: initialState.user
      };
    case types.USER_UPDATE_FAVORIS:
      return {
        ...state,
        user: {
          ...state.user,
          favoris: action.favoris
        }
      };
    default:
      return state;
  }
};

export default appReducer;
