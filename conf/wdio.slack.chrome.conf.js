/* eslint-disable max-len */
const defaults = require("./wdio.conf.js").config;
const _ = require("lodash");
const slack = require("wdio-slack-service");

const overrides = {
  capabilities: [
    {
      browserName: "chrome",
      "goog:chromeOptions": {
        args: ["--disable-infobars", "--incognito"],
      },
    },
  ],

  /**
   * Changing this to chromedriver coz selenium-standalone
   * goes sh*t when Chrome browser updated to latest
   * This happens when you don't have admin access to your machine
   */
  services: [
    "selenium-standalone",
    [
      slack,
      {
        webhook:
          process.env.SLACK_WEBHOOK_URL || "https://hooks.slack.com/........",
        notifyOnlyOnFailure: true,
        message: "Test Report",
      },
    ],
  ],
};

exports.config = _.defaultsDeep(overrides, defaults);
