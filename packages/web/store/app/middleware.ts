import Router from 'next/router';
import * as types from './types';
import * as appActions from './actions';
import { Store } from '../types';
import { routes, logoutRoutes, loginRoutes } from '../../constants';

const handleAppInit = (store: types.Store): any => {
  const { app } = store.getState();
  const url = window.location.pathname;

  switch (true) {
    case app.user !== null && logoutRoutes.includes(url):
      Router.push(routes.home);
      setTimeout(() => store.dispatch(appActions.appLoaded()), 500);
      break;
    case app.user === null && !loginRoutes.includes(url):
      Router.push(routes.home);
      setTimeout(() => store.dispatch(appActions.appLoaded()), 500);
      break;
    default:
      break;
  }
};

const appMiddleware = (store: Record<string, any>) => (
  next: Record<string, any>
) => (action: Function): Store => {
  next(action);

  switch (action.type) {
    case types.APP_INIT:
      handleAppInit(store);
      break;
    case types.APP_LOADING:
      break;
    case types.APP_LOADED:
      break;
    case types.RECEIVE_USER:
      Router.push(routes.home);
      break;
    default:
      return store;
  }

  return store;
};

export default appMiddleware;
