import { expect } from "chai";
import { TestData } from "../../testData/data";
import { HomePage } from "../../pages/homePage";
import { Page } from "../../pages/page";
import { SearchResultPage } from "../../pages/searchResultPage";

describe("General Medicine Search Test", () => {
  before(() => {
    Page.open();
  });

  it("Displays Search Result", () => {
    HomePage.inputSearchKeyword(TestData.GENERAL_MEDICINE_SEARCH);
    HomePage.clickSearchButton();
    expect(SearchResultPage.getMedicineTitle()).to.eql(
      TestData.GENERAL_MEDICINE_SEARCH
    );

    expect(SearchResultPage.getMedicineAlternateTitle()).to.eql(
      `Generic ${TestData.GENERAL_MEDICINE_SEARCH}`
    );
  });
});
