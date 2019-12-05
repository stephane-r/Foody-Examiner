import * as types from './types';
import { User } from '../../interfaces';

export const appInit = (): types.Action => ({
  type: types.APP_INIT
});

export const appLoading = (): types.Action => ({
  type: types.APP_LOADING
});

export const appLoaded = (): types.Action => ({
  type: types.APP_LOADED
});

export const loginSuccess = (): types.Action => ({
  type: types.LOGIN_SUCCESS
});

export const receiveUser = (
  token: string,
  user: User
): types.ReceiveUserAction => ({
  type: types.RECEIVE_USER,
  token,
  user
});

export const updateUserFavoris = (
  favoris: Array<string>
): types.UpdateUserFavoris => ({
  type: types.USER_UPDATE_FAVORIS,
  favoris
});

export const updateUserPantries = (
  pantries: Array<string>
): types.UpdateUserPantries => ({
  type: types.USER_UPDATE_PANTRIES,
  pantries
});

export const logout = (): types.Action => ({
  type: types.LOGOUT
});
