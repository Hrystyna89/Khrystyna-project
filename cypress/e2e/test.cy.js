describe('Basic Cypress test', () => {
  it('відкриває головну сторінку', () => {
    cy.visit('http://localhost:3000');

    cy.contains('Welcome').should('be.visible');
  });
});