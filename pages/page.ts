import * as dotenv from "dotenv";
dotenv.config();

import { HomePage } from "./homePage";

export class Page {
  public static open() {
    browser.url(process.env.URL);

    this.waitForElementTobeVisible(HomePage.searchTextBox);

    browser.addCookie({
      name: "grx_internal_user",
      value: "true",
    });
  }

  public static waitForElementTobeVisible(
    elementToVisible: WebdriverIO.Element
  ) {
    elementToVisible.waitForDisplayed({
      timeout: 10000,
      timeoutMsg: "Element not Displayed",
    });
  }
}
