require('dotenv').config();

const DEFAULT_API_URL = 'http://localhost:3000'

const config = {
  '/api': {
    target: process.env['MECURIS_API_URL'] || DEFAULT_API_URL,
    secure: false,
    pathRewrite: {
      '^/api': '',
    },
  },
};

module.exports = config;
