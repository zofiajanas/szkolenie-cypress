import { dataTestId, getSelector } from '../pages/utlis';

const selectors = {
  inputSearch: dataTestId('search-input'),
  subtmiButton: getSelector('type', 'submit'),
};

const containsValues = {
  noResults: 'There is no results',
};

export class SearchPage {
  navigateToPage() {
    cy.visit('/pages/search.html');
    return this;
  }

  setSearchValue(value) {
    cy.get(selectors.inputSearch).clear().click().type(value);
    return this;
  }

  submitSearch() {
    cy.get(selectors.subtmiButton).click();
    return this;
  }

  checkIsResults(value, isResults) {
    if (isResults) {
      cy.contains('.character-item__name', value);
      cy.contains('p', containsValues.noResults).should('not.visible');
    } else {
      cy.contains('.character-item__name', value).should('not.exist');
      cy.contains('p', containsValues.noResults);
    }

    // not.visible - this is in DOM, but is hidden
    // not.exist - this is not in DOM
    return this;
  }

  addToFavourites(name) {
    cy.contains(name).parent().children('button').click();
    return this;
  }
}
