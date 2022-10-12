describe('our login test', () => {
  describe('success login', () => {
    it('success login', () => {
      console.log('hello');

      cy.visit('/');

      // cy.get('#login').click().type('aaa');
      cy.get('[data-testid="login-input"]').click().type('login');
      cy.get('[data-testid="password-input"]').click().type('pass');
      cy.contains('Log in').click();
      cy.url().should('include', '/favourites');
    });
  });

  describe('empty fields', () => {
    it('login fail - empty fields', () => {
      cy.visit('/');
      cy.contains('Log in').click();
      cy.contains('span', 'Login is require').should('be.visible');
      cy.contains('span', 'Password is require').should('be.visible');
    });

    it('login fail - empty login', () => {
      cy.visit('/');

      cy.get('[data-testid="login-input"]').click().type('login');
      cy.contains('Log in').click();
      cy.contains('span', 'Login is require').should('not.be.visible');
      cy.contains('span', 'Password is require').should('be.visible');
    });

    it('login fail - empty password', () => {
      cy.visit('/');

      cy.get('[data-testid="password-input"]').click().type('pass');
      cy.contains('Log in').click();
      cy.contains('span', 'Login is require').should('be.visible');
      cy.contains('span', 'Password is require').should('not.be.visible');
    });
  });

  describe('uncorrect values', () => {
    it('login fail - uncorrent login', () => {
      cy.visit('/');

      cy.get('[data-testid="login-input"]').click().type('aaa');
      cy.get('[data-testid="password-input"]').click().type('pass');
      cy.contains('Log in').click();
      cy.contains('span', `We don't have this login`).should('be.visible');
    });

    it('login fail - uncorrent login', () => {
      cy.visit('/');

      cy.get('[data-testid="login-input"]').click().type('login');
      cy.get('[data-testid="password-input"]').click().type('aaa');
      cy.contains('Log in').click();
      cy.contains('span', `Password is incorrect`).should('be.visible');
    });
  });
});
