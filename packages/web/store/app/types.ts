export interface AppState {
  isLoading: boolean;
}
export interface Action {
  type: string;
}

export const APP_INIT = 'APP_INIT';
export const APP_LOADING = 'APP_LOADING';
export const APP_LOADED = 'APP_LOADED';
