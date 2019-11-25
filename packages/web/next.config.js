/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config('../../.env');

const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  exportPathMap: () => ({
    '/': { page: '/Home/index' },
    '/connexion': { page: '/Login/index' },
    '/inscription': { page: '/Register/index' },
    '/mon-garde-manger': { page: '/Pantries/index' },
    '/mes-favoris': { page: '/Favoris/index' }
  }),
  webpack: config => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,
      new Dotenv({
        path: path.join(__dirname, '../../.env'),
        systemvars: true
      })
    ];

    return config;
  }
};
