import { expect } from "chai";
import { TestData } from "../../testData/data";
import { HomePage } from "../../pages/homePage";
import { Page } from "../../pages/page";
import { SearchResultPage } from "../../pages/searchResultPage";

describe("Over-the-Counter Medicine Search Test", () => {
  before(() => {
    Page.open();
  });

  it("Displays Search Result by clicking on Search Button", () => {
    HomePage.inputSearchKeyword(TestData.OTC_MEDICINE_SEARCH);
    HomePage.clickSearchButton();
    expect(SearchResultPage.getMedicineTitle()).to.eql(
      TestData.OTC_MEDICINE_NAME
    );

    // Not All Medicines will have Alternate Medicine Name
    if (SearchResultPage.isMedicineAlternateTitleDisplayed() === true) {
      expect(SearchResultPage.getMedicineAlternateTitle()).to.eql(
        TestData.OTC_MEDICINE_ALTERNATE_NAME
      );
    }
  });

  it.skip("Displays TypeAhead based on Keyword Search", () => {
    // TODO: Add tests regarding typeahead
  });

  it.skip("Displays Search Result by Clicking on TypeAhead option", () => {
    // TODO: Add tests regarding typeahead
  });
});

// TODO: Add negative scenarios
describe.skip("Over-the-Counter Medicine Search Test - Alternate Scenarios", () => {
  before(() => {
    Page.open();
  });

  it.skip("Displays TypeAhead result contains Keyword", () => {
    // TODO: add alternate scenario tests
  });
});
