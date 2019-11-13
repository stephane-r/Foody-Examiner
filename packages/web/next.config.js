require('dotenv').config('../../.env');

const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  exportPathMap: () => ({
    '/': { page: '/Home/index' },
    '/connexion': { page: '/Login/index' }
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
