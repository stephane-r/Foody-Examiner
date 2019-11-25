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

export const APP_INIT = 'APP_INIT';
export const APP_LOADING = 'APP_LOADING';
export const APP_LOADED = 'APP_LOADED';

export const LOGIN = 'LOGIN';
export const RECEIVE_USER = 'RECEIVE_USER';
export const LOGOUT = 'LOGOUT';
