import { CouponPricePage } from "./couponPricePage";
import { Page } from "./page";

export class SearchResultPage {
  public static get searchResultList() {
    return $$('[aria-label*="best coupons"] > li');
  }

  public static get searchResultListWithCoupon() {
    return $$('//button[text()="Get free Coupon"]/ancestor-or-self::li');
  }

  public static get medicineTitle() {
    return $("#uat-drug-title");
  }

  private static get medicineAlternateTitle() {
    return $("#uat-drug-alternatives");
  }

  public static isMedicineAlternateTitleDisplayed() {
    return this.medicineAlternateTitle.isDisplayed()
  }

  private static get compareToolTip() {
    return $('[class*="tooltipContent"]');
  }

  private static get toolTipOkButton() {
    return $('[class*="okButton"]');
  }

  public static closeToolTip() {
    const toolTipDisplayed = this.compareToolTip.isDisplayed();
    if (toolTipDisplayed === true) {
      this.toolTipOkButton.click();
    }

    this.compareToolTip.waitForExist({
      timeout: 60000,
      reverse: true,
      timeoutMsg: "Tool Tip is still displayed",
    });
  }

  public static clickFirstSearchResult() {
    this.closeToolTip();
    this.searchResultList[0].click();
    Page.waitForElementTobeVisible(CouponPricePage.couponPriceDetails);
  }

  public static clickFirstSearchResultWithCoupon() {
    this.closeToolTip();
    this.searchResultListWithCoupon[0].click();
    Page.waitForElementTobeVisible(CouponPricePage.couponPriceDetails);
  }

  public static getMedicineTitle() {
    return this.medicineTitle.getText();
  }

  public static getMedicineAlternateTitle() {
    return this.medicineAlternateTitle.getText();
  }
}
