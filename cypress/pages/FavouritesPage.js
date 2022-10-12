const storageName = 'favouritesDisneyCharacters';
const containsValues = {
  favourites: ' Favourites ',
};

const values = ['Pluto', 'Pocahontas', 'Tarzan', 'Mickey Mouse', 'Donald Duck'];

export class FavouritesPageObject {
  navigateToPage(path) {
    cy.visit(path);
    return this;
  }

  setFavourites() {
    cy.addToFavourites(values);
    return this;
  }

  goToFavourites() {
    cy.contains(containsValues.favourites).click();
    return this;
  }

  isMyFavourites() {
    values.forEach(value => {
      cy.contains('.character-item__name', value);
    });

    return this;
  }

  setFavouritesToStorage() {
    // we need package: npm i cypress-localstorage-commands
    cy.setLocalStorage(storageName, '6610,5379,4703,5371,1947,1944,4704,2755,3082');
    return this;
  }

  removeFavourite(value) {
    cy.contains(value).parent().children('button').click();
    cy.contains(value).should('not.exist');
    return this;
  }
}
