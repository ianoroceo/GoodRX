import { Page } from "./page";
import { SearchResultPage } from "./searchResultPage";

export class HomePage {
  public static get searchTextBox() {
    return $('[type="search"]');
  }

  private static get searchButton() {
    return $('[type="submit"]');
  }

  private static get searchTypeAhead() {
    return $('[data-qa="typeahead-ctn"]');
  }

  private static get searchTypeAheadList() {
    return $$('[data-qa="typeahead-ctn"] > li');
  }

  public static inputSearchKeyword(keyword) {
    this.searchTextBox.setValue(keyword);
  }

  public static clickSearchButton() {
    Page.waitForElementTobeVisible(this.searchTypeAhead);
    this.searchButton.click();
    Page.waitForElementTobeVisible(SearchResultPage.medicineTitle);
  }
}
