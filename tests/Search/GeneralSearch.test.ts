import { expect } from "chai";
import { TestData } from "../../testData/data";
import { HomePage } from "../../pages/homePage";
import { Page } from "../../pages/page";
import { SearchResultPage } from "../../pages/searchResultPage";

describe("General Medicine Search Test", () => {
  before(() => {
    Page.open();
  });

  it("Displays Search Result by clicking on Search Button", () => {
    HomePage.inputSearchKeyword(TestData.GENERAL_MEDICINE_SEARCH);
    HomePage.clickSearchButton();
    expect(SearchResultPage.getMedicineTitle()).to.eql(
      TestData.GENERAL_MEDICINE_SEARCH
    );

    // Not All Medicines will have Alternate Medicine Name
    if (SearchResultPage.isMedicineAlternateTitleDisplayed() === true) {
      expect(SearchResultPage.getMedicineAlternateTitle()).to.eql(
        TestData.GENERAL_MEDICINE_ALTERNATE
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
