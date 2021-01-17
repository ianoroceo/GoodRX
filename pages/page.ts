/* eslint-disable require-jsdoc */

const DEFAULT_TIMEOUT = 5000;

export class Page {
  open() {
    browser.url(process.env.AppUrl);
    // browser.maximizeWindow();
  }

  constructor(selector) {
    this.selector = selector;
  }

  /**
   * Wait for the screen to be visible
   *
   * @param {boolean} isShown
   * @return {boolean}
   */
  waitForIsShown(isShown = true) {
    return $(this.selector).waitForDisplayed(DEFAULT_TIMEOUT, !isShown);
  }
}
