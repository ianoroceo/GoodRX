/* eslint-disable max-len */
const defaults = require("./wdio.conf.js").config;
const _ = require("lodash");

const overrides = {
  capabilities: [
    {
      browserName: "chrome",
      // Below was to avoid a Chrome dialog with error 'Failed to load extension
      // from /private/var/blahblahblah/... Loading of unpacked extensions disabled by administrator'
      "goog:chromeOptions": {
        useAutomationExtension: false,
        // args: ['--disable-infobars', '--incognito', '--start-maximized'],
      },
    },
  ],

  /**
   * Changing this to chromedriver coz selenium-standalone
   * goes sh*t when Chrome browser updated to latest
   * This happens when you don't have admin access to your machine
   */
  services: ["selenium-standalone"],
};

exports.config = _.defaultsDeep(overrides, defaults);
