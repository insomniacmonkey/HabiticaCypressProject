describe('My First Test', () => {
    it('Visit Habitica.com and click on login', () => {
      cy.visit('https://habitica.com')
      cy.contains('Login').click()

      cy.url().should('include', '/login')
      cy.get('#usernameInput').click().type('fake@email.com')
    })
  })