import { SearchPage } from '../pages/SearchPage';

describe('search', () => {
  it('success search', () => {
    const SearchPO = new SearchPage();

    const searchValue = 'Tarzan';
    const nextSearchValue = 'Pocahontas';

    // SearchPO.navigateToPage()
    // .setSearchValue(searchValue)
    // .submitSearch()
    // .checkIsResults(searchValue, true)
    // .setSearchValue(nextSearchValue)
    // .submitSearch()
    // .checkIsResults(nextSearchValue, true);

    SearchPO.navigateToPage();
    cy.searchSuccess(searchValue).searchSuccess(nextSearchValue);
  });

  it('no results', () => {
    const SearchPO = new SearchPage();

    const incorrectValue = 'vwnelv';
    const correctValue = 'Mickey Mouse';

    // SearchPO.navigateToPage()
    //   .setSearchValue(incorrectValue)
    //   .submitSearch()
    //   .checkIsResults(incorrectValue, false);
    //    .setSearchValue(correctValue)
    //    .submitSearch()
    //    .checkIsResults(correctValue, true);

    SearchPO.navigateToPage()
      .setSearchValue(incorrectValue)
      .submitSearch()
      .checkIsResults(incorrectValue, false);

    cy.searchSuccess(correctValue);
  });

  it('add to favourites', () => {
    const values = ['Pluto', 'Pocahontas', 'Tarzan', 'Mickey Mouse', 'Donald Duck'];

    const SearchPO = new SearchPage();
    SearchPO.navigateToPage();

    cy.addToFavourites(values);
    //   const searchValue = 'Pluto';
    //   const nextSearchValue = 'Donald Duck';

    //     .setSearchValue(searchValue)
    //     .submitSearch()
    //     .checkIsResults(searchValue, true)
    //     .addToFavourites(searchValue)
    //     .setSearchValue(nextSearchValue)
    //     .submitSearch()
    //     .checkIsResults(nextSearchValue, true)
    //     .addToFavourites(nextSearchValue)

    //     .setSearchValue(nextSearchValue)
    //     .submitSearch()
    //     .checkIsResults(nextSearchValue, true)
    //     .addToFavourites(nextSearchValue);
  });
});
