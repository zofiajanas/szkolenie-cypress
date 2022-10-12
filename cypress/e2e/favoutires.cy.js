import { FavouritesPageObject } from '../pages/FavouritesPage';

describe('favourites', () => {
  it('should display all favourites', () => {
    const FavouritesPO = new FavouritesPageObject();

    FavouritesPO.navigateToPage('/pages/search.html')
      .setFavourites()
      .goToFavourites()
      .isMyFavourites();
  });

  it.only('removeSingleFavourites', () => {
    const FavouritesPO = new FavouritesPageObject();
    FavouritesPO.setFavouritesToStorage()
      .navigateToPage('/pages/favourites.html')
      .isMyFavourites()
      .removeFavourite('Goofy');
  });
});
