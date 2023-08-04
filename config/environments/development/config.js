
const settings = {
  apiOrigin: "http://localhost:3001",
  APP_ENV: 'development',

  debug: false,

  GOOGLE_MAPS_KEY: '<>',

  homePath: "/en/locations/show/root",

  REACT_ENV: 'development',
  requireLogin: false,

  stripePublicKey: '<>',
};

const defaultSettings = require('../default.js')
module.exports = { ...defaultSettings, ...settings }
