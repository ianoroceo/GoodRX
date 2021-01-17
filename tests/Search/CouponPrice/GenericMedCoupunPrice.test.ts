import * as dotenv from "dotenv";
dotenv.config();

import { expect } from "chai";
import { CouponPricePage } from "../../../pages/couponPricePage";
import { TestData, CouponPriceDetailsData } from "../../../testData/data";
import { HomePage } from "../../../pages/homePage";
import { Page } from "../../../pages/page";
import { SearchResultPage } from "../../../pages/searchResultPage";

describe("General Medicine Coupon Price Test", () => {
  before(() => {
    Page.open();
  });

  it("Displays Coupon Price Details after clicking on an item in Search Result", () => {
    HomePage.inputSearchKeyword(TestData.GENERAL_MEDICINE_SEARCH);
    HomePage.clickSearchButton();
    SearchResultPage.clickFirstSearchResultWithCoupon();
    expect(CouponPricePage.isCouponPriceDetailsDisplayed()).to.eql(true);

    // Validate Coupon Price Details Elements
    // Header
    expect(CouponPricePage.isPharmacyNameDisplayed()).to.eql(true);
    // Store Pharmacy name in Environment Variables
    process.env.PHARMACY_NAME = CouponPricePage.getPharmacyNameText();

    expect(CouponPricePage.isMedicineQuantityDisplayed()).to.eql(true);
    expect(CouponPricePage.getMedicineQuantityText()).to.contains(
      TestData.GENERAL_MEDICINE_SEARCH.toLowerCase()
    );
    // Store Medicine Quantity in Environment Variables
    const drugQuantityText = CouponPricePage.getMedicineQuantityText();
    const drugQuantity = drugQuantityText.substr(
      0,
      drugQuantityText.indexOf(" of")
    );
    const medicineDosage = drugQuantityText.substr(
      drugQuantityText.indexOf("of")
    );

    process.env.DRUG_QUANTITY = drugQuantity;
    process.env.MEDICINE_DOSAGE = medicineDosage;

    // Store Coupon Price in Environment Variables
    const couponPrice = CouponPricePage.getCouponPriceText();
    const couponPriceAmount = couponPrice.substr(couponPrice.indexOf("Price "));
    process.env.COUPON_PRICE = couponPriceAmount;

    expect(CouponPricePage.getCouponPriceDetailsPricesTabText()).to.eql(
      CouponPriceDetailsData.PRICES_TAB
    );
    expect(CouponPricePage.getCouponPriceDetailsLocationsTabText()).to.eql(
      CouponPriceDetailsData.LOCATION_TAB
    );

    // Body
    CouponPricePage.couponPriceDetailsStep.forEach((item, idx) => {
      expect(item.getText()).to.contains(CouponPriceDetailsData.STEPS[idx]);
    });

    expect(CouponPricePage.getCouponPriceDetailsBreakDownHeaderText()).to.eql(
      CouponPriceDetailsData.PRICE_BREAKDOWN[0]
    );
    expect(
      CouponPricePage.getCouponPriceDetailsEstimatedRetailPriceText()
    ).to.contain(CouponPriceDetailsData.PRICE_BREAKDOWN[1]);
    expect(
      CouponPricePage.getCouponPriceDetailsGoodRxCouponPriceText()
    ).to.contain(CouponPriceDetailsData.PRICE_BREAKDOWN[2]);
    expect(CouponPricePage.getCouponPriceDetailsYourSavingsText()).to.contain(
      CouponPriceDetailsData.PRICE_BREAKDOWN[3]
    );

    expect(CouponPricePage.isCouponPriceDetailsPrintOutImageDisplayed()).to.eql(
      true
    );
    expect(CouponPricePage.getCouponPriceDetailsCouponButtonText()).to.eql(
      CouponPriceDetailsData.COUPON_BUTTON.toUpperCase()
    );
    expect(CouponPricePage.getCouponPriceDetailsHelpTextText()).to.eql(
      CouponPriceDetailsData.HELP_TEXT
    );
    // Footer
    expect(CouponPricePage.getCouponPriceDetailsFooterText()).to.eql(
      CouponPriceDetailsData.FOOTER
    );
  });

  it("Displays Coupon Page after clicking on Get Free Coupon Button", () => {
    CouponPricePage.clickCouponPriceDetailsCouponButton();
  });
});
