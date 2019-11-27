import { User } from '../../interfaces';

export interface AppState {
  isLoading: boolean;
  token: null | string;
  user: null | User;
}
export interface Action {
  type: string;
}
export interface ReceiveUserAction extends Action {
  token: string;
  user: User;
}
export interface UpdateUserFavoris extends Action {
  favoris: Array<string>;
}

export const APP_INIT = 'APP_INIT';
export const APP_LOADING = 'APP_LOADING';
export const APP_LOADED = 'APP_LOADED';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const RECEIVE_USER = 'RECEIVE_USER';
export const LOGOUT = 'LOGOUT';

export const USER_UPDATE_FAVORIS = 'USER_UPDATE_FAVORIS';
