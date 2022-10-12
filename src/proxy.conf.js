require('dotenv').config();

const DEFAULT_API_URL = 'http://localhost:3000';
const DEFAULT_STATIC_URL = 'http://localhost:3000/static';

const config = {
  '/api': {
    target: process.env['MECURIS_API_URL'] || DEFAULT_API_URL,
    secure: false,
    pathRewrite: {
      '^/api': '',
    },
  },
  '/static': {
    target: process.env['MECURIS_STATIC_URL'] || DEFAULT_STATIC_URL,
    secure: false,
    pathRewrite: {
      '^/static': '',
    },
  },
};

module.exports = config;
