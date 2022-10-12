import { LoginPageObject } from '../pages/LoginPage';

describe('our login test', () => {
  describe('success login', () => {
    it('success login', () => {
      // cy.get('#login').click().type('aaa');

      // cy.get('[data-testid="login-input"]').click().type('login');
      // cy.get('[data-testid="password-input"]').click().type('pass');
      // cy.contains('Log in').click();
      // cy.url().should('include', '/favourites');

      // const LoginPO = new LoginPageObject();
      // LoginPO.navigateToPage().setLogin('login', 'pass').submitLoginForm().isPage('/favourites');

      cy.loginSuccess('login', 'pass');
    });
  });

  describe('empty fields', () => {
    it('login fail - empty fields', () => {
      // cy.visit('/');
      // cy.contains('Log in').click();
      // cy.contains('span', 'Login is require').should('be.visible');
      // cy.contains('span', 'Password is require').should('be.visible');

      const LoginPO = new LoginPageObject();
      LoginPO.navigateToPage().submitLoginForm().loginRequireInfo(true).passwordRequireInfo(true);
    });

    it('login fail - empty login', () => {
      // cy.visit('/');
      // cy.get('[data-testid="login-input"]').click().type('login');
      // cy.contains('Log in').click();
      // cy.contains('span', 'Login is require').should('not.be.visible');
      // cy.contains('span', 'Password is require').should('be.visible');

      const LoginPO = new LoginPageObject();
      LoginPO.navigateToPage()
        .setLogin(null, 'pass')
        .submitLoginForm()
        .loginRequireInfo(true)
        .passwordRequireInfo(false);
    });

    it('login fail - empty password', () => {
      // cy.visit('/');
      // cy.get('[data-testid="password-input"]').click().type('pass');
      // cy.contains('Log in').click();
      // cy.contains('span', 'Login is require').should('be.visible');
      // cy.contains('span', 'Password is require').should('not.be.visible');

      const LoginPO = new LoginPageObject();
      LoginPO.navigateToPage()
        .setLogin('login', null)
        .submitLoginForm()
        .loginRequireInfo(false)
        .passwordRequireInfo(true);
    });
  });

  describe('uncorrect values', () => {
    it('login fail - incorrent login', () => {
      // cy.visit('/');
      // cy.get('[data-testid="login-input"]').click().type('aaa');
      // cy.get('[data-testid="password-input"]').click().type('pass');
      // cy.contains('Log in').click();
      // cy.contains('span', `We don't have this login`).should('be.visible');

      const LoginPO = new LoginPageObject();
      LoginPO.navigateToPage().setLogin('aaa', 'pass').submitLoginForm().loginIncorrectInfo();
    });

    it('login fail - incorrent password', () => {
      // cy.visit('/');
      // cy.get('[data-testid="login-input"]').click().type('login');
      // cy.get('[data-testid="password-input"]').click().type('aaa');
      // cy.contains('Log in').click();
      // cy.contains('span', `Password is incorrect`).should('be.visible');

      const LoginPO = new LoginPageObject();
      LoginPO.navigateToPage().setLogin('login', 'aaa').submitLoginForm().passwordIncorrectInfo();
    });
  });
});
