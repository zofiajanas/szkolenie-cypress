import { SearchPage } from '../pages/SearchPage';

describe('search', () => {
  it('success search', () => {
    const SearchPO = new SearchPage();

    const searchValue = 'Tarzan';
    const nextSearchValue = 'Pocahontas';

    SearchPO.navigateToPage()
      .setSearchValue(searchValue)
      .submitSearch()
      .checkIsResults(searchValue, true)
      .setSearchValue(nextSearchValue)
      .submitSearch()
      .checkIsResults(nextSearchValue, true);
  });

  it('no results', () => {
    const SearchPO = new SearchPage();

    const incorrectValue = 'vwnelv';
    const correctValue = 'Mickey Mouse';

    SearchPO.navigateToPage()
      .setSearchValue(incorrectValue)
      .submitSearch()
      .checkIsResults(incorrectValue, false)
      .setSearchValue(correctValue)
      .submitSearch()
      .checkIsResults(correctValue, true);
  });

  it.only('add to favourites', () => {
    const SearchPO = new SearchPage();

    const searchValue = 'Pluto';
    const nextSearchValue = 'Donald Duck';

    SearchPO.navigateToPage()
      .setSearchValue(searchValue)
      .submitSearch()
      .checkIsResults(searchValue, true)
      .addToFavourites(searchValue)
      .setSearchValue(nextSearchValue)
      .submitSearch()
      .checkIsResults(nextSearchValue, true)
      .addToFavourites(nextSearchValue)

      .setSearchValue(nextSearchValue)
      .submitSearch()
      .checkIsResults(nextSearchValue, true)
      .addToFavourites(nextSearchValue);
  });
});
