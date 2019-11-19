import * as types from './types';
import * as appActions from './actions';
import { Store } from '../types';

const appMiddleware = (store: Record<string, any>) => (
  next: Record<string, any>
) => (action: Function): Store => {
  next(action);

  switch (action.type) {
    case types.APP_INIT:
      store.dispatch(appActions.appLoaded());
      break;
    case types.APP_LOADING:
      break;
    case types.APP_LOADED:
      break;
    default:
      return store;
  }

  return store;
};

export default appMiddleware;
