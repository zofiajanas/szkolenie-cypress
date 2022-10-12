import { dataTestId } from './utlis';

const selectors = {
  loginInput: dataTestId('login-input'),
  passwordInput: dataTestId('password-input'),
};

const containsValues = {
  logInButton: 'Log in',
  loginRequire: 'Login is require',
  passwordRequire: 'Password is require',
  incorrectEmail: `We don't have this login`,
  incorrectPassword: 'Password is incorrect',
};

export class LoginPageObject {
  navigateToPage() {
    cy.visit('/');
    return this;
  }

  setLogin(login, password) {
    if (login) cy.get(selectors.loginInput).click().type(login);
    if (password) cy.get(selectors.passwordInput).click().type(password);

    return this;
  }

  submitLoginForm() {
    cy.contains(containsValues.logInButton).click();
    return this;
  }

  isPage(url) {
    cy.url().should('include', url);
    return this;
  }

  loginRequireInfo(isVisible) {
    const shouldVisible = isVisible ? 'be.visible' : 'not.be.visible';
    cy.contains('span', containsValues.loginRequire).should(shouldVisible);
    return this;
  }

  passwordRequireInfo(isVisible) {
    const shouldVisible = isVisible ? 'be.visible' : 'not.be.visible';
    cy.contains('span', containsValues.passwordRequire).should(shouldVisible);
    return this;
  }

  loginIncorrectInfo() {
    console.log(containsValues.incorrectLogin);
    cy.contains('span', containsValues.incorrectEmail).should('be.visible');

    return this;
  }

  passwordIncorrectInfo() {
    cy.contains('span', containsValues.incorrectPassword).should('be.visible');
    return this;
  }
}
