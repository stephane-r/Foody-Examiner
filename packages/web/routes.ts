/* eslint-disable no-multi-assign */
const nextRoutes = require('next-routes');

const routes = (module.exports = nextRoutes());

routes.add('Home', '/');
routes.add('Login', '/connexion');
routes.add('Register', '/inscription');
routes.add('Pantries', '/mon-garde-manger');
routes.add('Favoris', '/mes-favoris');
routes.add('MyUploads', '/mes-photos');
