import * as dotenv from "dotenv";
dotenv.config();

export class CouponPage {
  // Header
  private static get printCouponButton() {
    return $('[data-qa="btn-print"] button');
  }

  public static isPrintCouponButtonDisplayed() {
    return this.printCouponButton.isDisplayed();
  }

  private static get emailCouponButton() {
    return $('[data-qa="btn-email"] button');
  }

  public static isEmailCouponButtonDisplayed() {
    return this.emailCouponButton.isDisplayed();
  }

  private static get textCouponButton() {
    return $('[data-qa="btn-sms-text"] button');
  }

  public static isTextCouponButtonDisplayed() {
    return this.textCouponButton.isDisplayed();
  }

  private static get mailCouponLink() {
    return $('[data-qa="btn-offline-mail"] a');
  }

  public static isMailCouponLinkDisplayed() {
    return this.mailCouponLink.isDisplayed();
  }

  private static get headerTitle() {
    return $('[class*="couponPageHeading"]');
  }

  public static getHeaderTitleText() {
    return this.headerTitle.getText();
  }

  // Body
  public static get couponDetails() {
    return $('[class*="couponContainer"]');
  }

  public static isCouponDetailsDisplayed() {
    return this.couponDetails.isDisplayed();
  }

  private static get couponTitleImage() {
    return $('[class*="couponTitle"] img');
  }

  public static isCouponTitleImageDisplayed() {
    return this.couponTitleImage.isDisplayed();
  }

  private static get couponTitle() {
    return $('[class*="couponTitle"] [data-qa="coupon_title"]');
  }

  public static getCouponTitleText() {
    return this.couponTitle.getText();
  }

  // Your Prescription
  private static get prescriptionHeader() {
    return $(
      '[class*="prescriptionSection"] > [class*="sectionHeading"]:first-child'
    );
  }

  public static getPrescriptionHeaderText() {
    return this.prescriptionHeader.getText();
  }

  private static get prescriptionDosage() {
    return $('[data-qa="coupon_name_dosage"]');
  }

  public static getPrescriptionDosageText() {
    return this.prescriptionDosage.getText();
  }

  private static get prescriptionQuantity() {
    return $('[data-qa="coupon_form_display"]');
  }

  public static getPrescriptionQuantityText() {
    return this.prescriptionQuantity.getText();
  }

  // Coupon Price Details
  private static get couponPriceHeader() {
    return $('[class*="prescriptionSection"] > div:nth-child(3)');
  }

  public static getCouponPriceHeaderText() {
    return this.couponPriceHeader.getText();
  }

  private static get couponPrice() {
    return $('[data-qa="coupon_price"]');
  }

  public static isCouponPriceDisplayed() {
    return this.couponPrice.isDisplayed();
  }

  public static getCouponPriceText() {
    return this.couponPrice.getText();
  }

  private static get couponPharmacy() {
    return $('[data-qa="coupon_pharmacy_name"]');
  }

  public static getCouponPharmacyText() {
    return this.couponPharmacy.getText();
  }

  public static get couponInstructions() {
    return $$('[class*="couponInstructions"] > li');
  }

  private static get couponPriceFooter() {
    return $('[class*="prescriptionSection"] > div:last-child');
  }

  public static getCouponPriceFooterText() {
    return this.couponPriceFooter.getText();
  }

  // Pharmacy Info
  private static get pharmacyInfoHeader() {
    return $('[class*="pharmacistInfoSection"] > div');
  }

  public static getPharmacyInfoHeaderText() {
    return this.pharmacyInfoHeader.getText();
  }

  public static get pharmacyInfoSectionHeader() {
    return $$('[class*="pharmacistInfoSection"] [class*="sectionTitle"]');
  }

  public static get pharmacyInfoSectionContent() {
    return $$('[class*="pharmacistInfoSection"] [class*="sectionContent"]');
  }

  // Coupon Footer
  private static get customerSupportNumber() {
    return $('[class*="phoneSection"]:first-child');
  }

  public static getCustomerSupportNumberText() {
    return this.customerSupportNumber.getText();
  }

  private static get pharmacySupportNumber() {
    return $('[class*="phoneSection"]:last-child');
  }

  public static getPharmacySupportNumberText() {
    return this.pharmacySupportNumber.getText();
  }

  private static get petSection() {
    return $('[class*="petSection"]');
  }

  public static getPetSectionText() {
    return this.petSection.getText();
  }

  private static get couponFaq() {
    return $('[data-qa="coupon_faq_container"]');
  }

  // TODO: add method to validate text if needed
  public static isCouponFaqDisplayed() {
    return this.couponFaq.isDisplayed();
  }

  private static get couponReminder() {
    return $('[data-qa="coupon_faq_reminders_container"]');
  }

  // TODO: add method to validate text if needed
  public static isCouponReminderDisplayed() {
    return this.couponReminder.isDisplayed();
  }

  // Footer
  private static get couponDetailsContent() {
    return $('[class*="contentContainer"]');
  }

  private static get disclamerQuestions() {
    return $('[class*="questionsText"]');
  }

  private static get disclaimerText() {
    return $('[class*="disclaimerText"]');
  }

  private static get cookiePreferences() {
    return $('[data-qa="coupon_cookie_preferences"]');
  }

  private static get collectionNotice() {
    return $('[data-qa="coupon_collection_notice"]');
  }
}
