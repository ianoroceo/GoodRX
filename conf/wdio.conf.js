// const moment = require('moment');
const path = require("path");

const dotenv = require("dotenv");
dotenv.config();

exports.config = {
  runner: "local",

  specs: ["./src/tests/**/*.js"],
  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],
  suites: {},

  maxInstances: 1,

  capabilities: [{ maxInstances: 5 }],

  logLevel: "debug",
  outputDir: path.resolve(__dirname, "../logs"),

  bail: 0,

  baseUrl: process.env.URL,

  waitforTimeout: 10000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,

  framework: "mocha",

  reporters: ["spec", "dot"],

  mochaOpts: {
    ui: "bdd",
    timeout: 120000,
  },

  before: function (capabilities, specs, hook, context) {
    browser.setWindowSize(1920, 1440);
  },
};
