/**
 * TODO: Typically test data should be generated by utilizing
 * API Calls to retrieve data. But for this purpose
 * we are declaring the test data as static data
 */

export const TestData = {
  // General Medicine Search Data
  GENERAL_MEDICINE_SEARCH: "Amoxicillin",
  GENERAL_MEDICINE_NAME: "Amoxicillin",
  GENERAL_MEDICINE_ALTERNATE_NAME: "Generic Amoxil",

  // Over-the-Counter Medicine Search Data
  OTC_MEDICINE_SEARCH: "Advil",
  OTC_MEDICINE_NAME: "Advil, Motrin IB",
  OTC_MEDICINE_ALTERNATE_NAME: "Ibuprofen Non-Prescription",

  // Controlled Drug Medicine Search Data
  CONTROLLED_DRUG_SEARCH: "Vicodin",
  CONTROLLED_DRUG_NAME: "Vicodin, Xodol",
  CONTROLLED_DRUG_ALTERNATE_NAME: "Hydrocodone / Acetaminophen",

  // Medicine Equipment Search Data
  MEDICINE_EQUIPMENT_SEARCH: "True Metrix",
  MEDICINE_EQUIPMENT_NAME: "True Metrix",
  MEDICINE_EQUIPMENT_ALTERNATE_NAME: "",
};

export const CouponPriceDetailsData = {
  PRICES_TAB: "Prices",
  LOCATION_TAB: "Nearby Locations",
  FOOTER:
    "Not all prescriptions are kept in stock at all providers at all times; you may want to check with your provider in advance.",
  STEPS: [
    "Get the coupon using the button on the right.",
    "Present the coupon to your pharmacist.",
    "Pay the coupon price of",
  ],

  PRICE_BREAKDOWN: [
    "PRICE BREAKDOWN",
    "Estimated Retail Price",
    "GoodRx Coupon Price",
    "Your Savings ",
  ],

  COUPON_BUTTON: "Get Free Coupon",
  HELP_TEXT:
    "Opens window to print, email or text coupon" ||
    "You'll need to complete a quick eligibility check for this discount.",
  RESTRICTION_HELP_TEXT:
    "You'll need to complete a quick eligibility check for this discount.",
  OTC_MODAL_HEADER: "This coupon has Over-The-Counter restrictions.",
  OTC_MODAL_BODY_HEADER: "To use this coupon, you’ll need to:",
  OTC_MODAL_BODY_STEPS_HEADER: [
    "Get a doctor’s prescription.",
    "Present your GoodRx coupon at the pharmacy counter, not the cash register.",
  ],
  OTC_MODAL_BODY_STEPS_DESC: [
    "Though you do not need a prescription to buy this product, you will need a doctor’s prescription to receive the GoodRx discount.",
    "The pharmacist will take care of everything and apply the coupon.",
  ],
  OTC_MODAL_FOOTER: [
    "Have other questions?",
    "Learn more about using GoodRx to save on over-the-counter products.",
  ],
  MEDICINE_EQUIPMENT_MODAL_HEADER: "Confirm eligibility for this discount",
  MEDICINE_EQUIPMENT_MODAL_BODY_HEADER:
    "This discount has some eligibility requirements. Please review below.",
  MEDICINE_EQUIPMENT_MODAL_BODY_DESC: "I agree to the following statements:",
  MEDICINE_EQUIPMENT_MODAL_BODY_FOOTER:
    "If you meet the requirements you may access the discount using the button below.",
  MEDICINE_EQUIPMENT_MODAL_BODY_STEPS_HEADER: [
    "I am not filling a prescription for a pet",
    "I have been prescribed this drug or am a caregiver of someone taking this drug",
    "I am a resident of the United States or Puerto Rico",
    "I am not currently enrolled in any state or federally funded programs, including but not limited to Medicare, Medicaid, VA, DoD, or Tricare",
  ],
  MEDICINE_EQUIPMENT_MODAL_FOOTER:
    "I don't qualify. Please show me other options.",
};

export const CouponPageData = {
  HEADER_TITLE: "Show this free coupon to your pharmacist",
  COUPON_TITLE: "Discount Drug Coupon",
  PRESCRIPTION_TITLE: "Your prescription",
  COUPON_PRICE_TITLE: "Discounted price with this coupon",
  COUPON_PRICE_TITLE_CONTROLLED: "Easy to follow instructions",
  COUPON_INSTRUCTIONS: [
    "Print, text, or email this discount card..",
    "Bring discount card and your prescription to the pharmacy",
    "Present the discount card to the pharmacist and save!!",
  ],
  COUPON_PRICE_FOOTER:
    "This is your estimated price. The pharmacy will provide exact pricing.",
  PHARMACY_INFO_TITLE: "Pharmacist info",
  PHARMACY_INFO_SECTION_TITLE: ["Member ID", "Group", "Bin", "PCN"],
  CUS_SUPPORT_NUMBER: "Customer questions call: 1-855-426-4465",
  PHARMACY_SUPPORT_NUMBER: "Pharmacist questions call: 1-855-782-3703",
  PET_SECTION_DISCLAIMER:
    "This discount card will not work for pet prescriptions. GoodRx provides discounts for pets. If you would like help finding a pet coupon, please call 1-855-426-4465 during business hours.",
};
