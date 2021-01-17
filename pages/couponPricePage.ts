import { CouponPage } from "./couponPage";
import { Page } from "./page";

export class CouponPricePage {
  public static get couponPriceDetails() {
    return $('[id*="expanded-row-coupon"]');
  }

  private static get couponPriceDetailsFooter() {
    return $('[id*="expanded-row-coupon"] > div:last-child');
  }

  private static get couponPriceDetailsPricesTab() {
    return $('[data-qa="prices_tab_in_expanded_row"]');
  }

  private static get couponPriceDetailsLocationsTab() {
    return $('[data-qa="nearby_locations_tab_in_expanded_price_row"]');
  }

  public static get couponPriceDetailsStep() {
    return $$('[id*="expanded-row-coupon"] li');
  }

  private static get couponPriceDetailsBreakDownHeader() {
    return $('[class*="priceBreakDown"] [class*="tableHeader"]');
  }

  private static get couponPriceDetailsEstimatedRetailPrice() {
    return $('[data-qa="estimated_cash_price_in_expanded_row"]');
  }

  private static get couponPriceDetailsGoodRxCouponPrice() {
    return $('[data-qa="goodrx_coupon_price_in_expanded_row"]');
  }

  private static get couponPriceDetailsYourSavings() {
    return $('[data-qa="your_savings_in_expanded_price_row"]');
  }

  private static get couponPriceDetailsCouponButton() {
    return $('[id*="expanded-row-coupon"] [data-qa="coupon_button"]');
  }

  private static get couponPriceDetailsPrintOutImage() {
    return $('[class*="printoutImg"]');
  }

  private static get couponPriceDetailsHelpText() {
    return $('[data-qa="help_text_in_expanded_price_row"]');
  }

  private static get pharmacyName() {
    return $('[data-qa="pharmacy_name_in_expanded_price_row_header"]');
  }

  private static get medicineQuantity() {
    return $('[data-qa="drug_qty_and_display_in_expanded_price_row_header"]');
  }

  private static get couponPrice() {
    return $('[data-qa="header_price_in_expanded_price_row"]');
  }

  public static isCouponPriceDetailsDisplayed() {
    return this.couponPriceDetails.isDisplayed();
  }

  public static getCouponPriceDetailsFooterText() {
    return this.couponPriceDetailsFooter.getText();
  }

  public static getCouponPriceDetailsPricesTabText() {
    return this.couponPriceDetailsPricesTab.getText();
  }

  public static getCouponPriceDetailsLocationsTabText() {
    return this.couponPriceDetailsLocationsTab.getText();
  }

  public static getCouponPriceDetailsBreakDownHeaderText() {
    return this.couponPriceDetailsBreakDownHeader.getText();
  }

  public static getCouponPriceDetailsEstimatedRetailPriceText() {
    return this.couponPriceDetailsEstimatedRetailPrice.getText();
  }

  public static getCouponPriceDetailsGoodRxCouponPriceText() {
    return this.couponPriceDetailsGoodRxCouponPrice.getText();
  }

  public static getCouponPriceDetailsYourSavingsText() {
    return this.couponPriceDetailsYourSavings.getText();
  }

  public static getCouponPriceDetailsCouponButtonText() {
    return this.couponPriceDetailsCouponButton.getText();
  }

  public static clickCouponPriceDetailsCouponButton() {
    // Get the Session id of the Parent
    const parentGuid = browser.getWindowHandle();

    // Click the Get Free Coupon Button to open new window
    this.couponPriceDetailsCouponButton.click();
    browser.pause(5000); // Adding sleep for new tab to exist

    // Get the All the session id of the browsers
    const allGuid = browser.getWindowHandles();
    // Print the title of the page
    console.log(`Page title before Switching : ${browser.getTitle()}`);
    console.log(`Total Windows : ${allGuid.length}`);

    // iterate the values in the set
    allGuid.forEach((item, idx) => {
      if (item != parentGuid) {
        // If it's not Parent Window GUID, switch to it
        browser.switchToWindow(item);
        console.log(`Page title after Switching : ${browser.getTitle()}`);
      }
    });
    Page.waitForElementTobeVisible(CouponPage.couponDetails);
    return this;
  }

  public static isCouponPriceDetailsPrintOutImageDisplayed() {
    return this.couponPriceDetailsPrintOutImage.isDisplayed();
  }

  public static getCouponPriceDetailsHelpTextText() {
    return this.couponPriceDetailsHelpText.getText();
  }

  public static isPharmacyNameDisplayed() {
    return this.pharmacyName.isDisplayed();
  }

  public static getPharmacyNameText() {
    return this.pharmacyName.getText();
  }

  public static isMedicineQuantityDisplayed() {
    return this.medicineQuantity.isDisplayed();
  }

  public static getMedicineQuantityText() {
    return this.medicineQuantity.getText();
  }

  public static getCouponPriceText() {
    return this.couponPrice.getText();
  }
}
