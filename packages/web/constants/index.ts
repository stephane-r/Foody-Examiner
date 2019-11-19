export const __DEV__ = true;
export const isServer: boolean = typeof window === 'undefined';
export const isClient: boolean = typeof window !== 'undefined';
export const routes = {
  home: '/',
  login: '/connexion',
  register: '/inscription'
};
export const logoutRoutes = [routes.login, routes.register];
export const loginRoutes = [routes.home, routes.login, routes.register];
