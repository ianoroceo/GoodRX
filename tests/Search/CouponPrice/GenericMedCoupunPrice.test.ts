import { expect } from "chai";
import { CouponPricePage } from "../../../pages/couponPricePage";
import { TestData } from "../../../testData/data";
import { HomePage } from "../../../pages/homePage";
import { Page } from "../../../pages/page";
import { SearchResultPage } from "../../../pages/searchResultPage";

describe("General Medicine Coupon Price Test", () => {
  before(() => {
    Page.open();
  });

  it("Displays Coupon Price", () => {
    HomePage.inputSearchKeyword(TestData.GENERAL_MEDICINE_SEARCH);
    HomePage.clickSearchButton();
    SearchResultPage.clickFirstSearchResultWithCoupon();
    expect(CouponPricePage.isCouponPriceDetailsDisplayed()).to.eql(true);
  });
});
