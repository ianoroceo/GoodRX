import * as dotenv from "dotenv";
dotenv.config();

import { expect } from "chai";
import { CouponPage } from "../../../pages/couponPage";
import { CouponPricePage } from "../../../pages/couponPricePage";
import {
  TestData,
  CouponPriceDetailsData,
  CouponPageData,
} from "../../../testData/data";
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
    const couponPriceAmount = couponPrice.substr(couponPrice.indexOf("$") + 0);
    process.env.COUPON_PRICE = couponPriceAmount;

    // Tabs
    expect(CouponPricePage.getCouponPriceDetailsPricesTabText()).to.eql(
      CouponPriceDetailsData.PRICES_TAB
    );
    expect(CouponPricePage.getCouponPriceDetailsLocationsTabText()).to.eql(
      CouponPriceDetailsData.LOCATION_TAB
    );

    // Body
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

    if (CouponPricePage.isRestrictionsApplyDisplayed() === true) {
      expect(CouponPricePage.getCouponPriceDetailsHelpTextText()).to.eql(
        CouponPriceDetailsData.RESTRICTION_HELP_TEXT
      );
    } else {
      expect(CouponPricePage.getCouponPriceDetailsHelpTextText()).to.eql(
        CouponPriceDetailsData.HELP_TEXT
      );

      CouponPricePage.couponPriceDetailsStep.forEach((item, idx) => {
        expect(item.getText()).to.contains(CouponPriceDetailsData.STEPS[idx]);
      });
    }
    // Footer
    expect(CouponPricePage.getCouponPriceDetailsFooterText()).to.eql(
      CouponPriceDetailsData.FOOTER
    );
  });

  it("Displays Coupon Page after clicking on Get Free Coupon Button", () => {
    CouponPricePage.clickCouponPriceDetailsCouponButton();

    // Header Validations
    expect(CouponPage.isPrintCouponButtonDisplayed()).to.eql(true);
    expect(CouponPage.isEmailCouponButtonDisplayed()).to.eql(true);
    expect(CouponPage.isTextCouponButtonDisplayed()).to.eql(true);
    expect(CouponPage.isMailCouponLinkDisplayed()).to.eql(true);

    expect(CouponPage.getHeaderTitleText()).to.eql(CouponPageData.HEADER_TITLE);

    // Body Validations
    expect(CouponPage.isCouponDetailsDisplayed()).to.eql(true);
    expect(CouponPage.isCouponTitleImageDisplayed()).to.eql(true);

    // Prescription Details
    expect(CouponPage.getCouponTitleText()).to.eql(CouponPageData.COUPON_TITLE);
    expect(CouponPage.getPrescriptionHeaderText()).to.eql(
      CouponPageData.PRESCRIPTION_TITLE
    );

    const dosage = process.env.MEDICINE_DOSAGE;
    const medDosage = dosage.substr(dosage.indexOf("of ") + 3);
    expect(CouponPage.getPrescriptionDosageText()).to.eql(medDosage);
    expect(CouponPage.getPrescriptionQuantityText()).to.eql(
      process.env.DRUG_QUANTITY
    );
    expect(CouponPage.getCouponPriceHeaderText()).to.eql(
      CouponPageData.COUPON_PRICE_TITLE
    );
    expect(CouponPage.isCouponPriceDisplayed()).to.eql(true);
    expect(CouponPage.getCouponPriceText()).to.eql(process.env.COUPON_PRICE);
    expect(CouponPage.getCouponPharmacyText()).to.eql(
      `at ${process.env.PHARMACY_NAME}`
    );
    expect(CouponPage.getCouponPriceFooterText()).to.eql(
      CouponPageData.COUPON_PRICE_FOOTER
    );

    // Pharmacy Info
    expect(CouponPage.getPharmacyInfoHeaderText()).to.eql(
      CouponPageData.PHARMACY_INFO_TITLE
    );
    CouponPage.pharmacyInfoSectionHeader.forEach((item, idx) => {
      expect(item.getText()).to.eql(
        CouponPageData.PHARMACY_INFO_SECTION_TITLE[idx]
      );
    });
    CouponPage.pharmacyInfoSectionContent.forEach((item) => {
      expect(item.isDisplayed()).to.eql(true);
    });

    // Coupon Footer
    expect(CouponPage.getCustomerSupportNumberText()).to.eql(
      CouponPageData.CUS_SUPPORT_NUMBER
    );
    expect(CouponPage.getPharmacySupportNumberText()).to.eql(
      CouponPageData.PHARMACY_SUPPORT_NUMBER
    );

    // Footer Validations
    expect(CouponPage.isCouponFaqDisplayed()).to.eql(true);
    expect(CouponPage.isCouponReminderDisplayed()).to.eql(true);
  });
});
