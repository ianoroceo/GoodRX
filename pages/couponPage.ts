import * as dotenv from "dotenv";
dotenv.config();

import { Page } from "./page";

export class CouponPage {
  // Header
  private static get printCoupunButton() {
    return '[data-qa="btn-print"] button';
  }

  private static get emailCouponButton() {
    return '[data-qa="btn-email"] button';
  }

  private static get textCouponButton() {
    return '[data-qa="btn-sms-text"] button';
  }

  private static get mailCouponLink() {
    return '[data-qa="btn-offline-mail"] a';
  }

  private static get headerTitle() {
    return '[class*="couponPageHeading"]';
  }

  // Body
  public static get couponDetails() {
    return $('[class*="couponContainer"]');
  }

  private static get couponTitleImage() {
    return $('[class*="couponTitle"] img');
  }

  private static get couponTitle() {
    return $('[class*="couponTitle"] [data-qa="coupon_title"]');
  }

  // Your Prescription
  private static get prescriptionHeader() {
    return $(
      '[class*="prescriptionSection"] > [class*="sectionHeading"]:first-child'
    );
  }

  private static get prescriptionDosage() {
    return $('[data-qa="coupon_name_dosage"]');
  }

  private static get prescriptionQuantity() {
    return $('[data-qa="coupon_form_display"]');
  }

  // Coupon Price Details
  private static get couponPriceHeader() {
    return $('[class*="prescriptionSection"] > div:nth-child(3)');
  }

  private static get couponPrice() {
    return $('[data-qa="coupon_price"]');
  }

  private static get couponPharmacy() {
    return $('[data-qa="coupon_pharmacy_name"]');
  }

  private static get couponPriceFooter() {
    return $('[class*="prescriptionSection"] > div:last-child');
  }

  // Pharmacy Info
  private static get pharmacyInfoHeader() {
    return $('[class*="pharmacistInfoSection"] > div');
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

  private static get pharmacySupportNumber() {
    return $('[class*="phoneSection"]:last-child');
  }

  private static get couponFaq() {
    return $('[data-qa="coupon_faq_container"]');
  }

  private static get couponReminder() {
    return $('[data-qa="coupon_faq_reminders_container"]');
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
