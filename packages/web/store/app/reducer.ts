import * as types from './types';

const initialState: types.AppState = {
  isLoading: true
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
    default:
      return state;
  }
};

export default appReducer;
