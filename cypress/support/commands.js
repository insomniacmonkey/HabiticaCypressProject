// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('login', (username, password) => {
    cy.visit('')
    cy.contains('Login').click()
    cy.url().should('include', '/login')
    cy.get('#usernameInput').click().type(username)
    cy.get('#passwordInput').click().type(password)
    cy.get('[class="btn btn-info"]').click()
})

// TODO: Rewrite this to check for multiple and to check them all off. 
Cypress.Commands.add('welcomeBack', () => {
    cy.get('#yesterdaily___BV_modal_body_').find('[class="task-control daily-todo-control task-neutral-control-inner-daily-todo"]').click()
})
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

