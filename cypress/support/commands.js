import { LoginPageObject } from '../pages/LoginPage';
import { SearchPage } from '../pages/SearchPage';

Cypress.Commands.add('loginSuccess', (login, password) => {
  const LoginPO = new LoginPageObject();
  LoginPO.navigateToPage().setLogin(login, password).submitLoginForm().isPage('/favourites');
});

Cypress.Commands.add('searchSuccess', value => {
  const SearchPO = new SearchPage();

  SearchPO.setSearchValue(value).submitSearch().checkIsResults(value, false);
});

Cypress.Commands.add('addToFavourites', values => {
  values.forEach(value => {
    cy.searchSuccess(value);

    const SearchPO = new SearchPage();
    SearchPO.addToFavourites(value);
  });
});
