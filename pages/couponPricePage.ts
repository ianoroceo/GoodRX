export class CouponPricePage {
  public static get couponPriceDetails() {
    return $('//h3[text()="Coupon Price"]/parent::div');
  }

  public static isCouponPriceDetailsDisplayed() {
    return this.couponPriceDetails.isDisplayed();
  }
}
