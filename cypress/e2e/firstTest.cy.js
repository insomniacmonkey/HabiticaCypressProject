//TODO: I need a before each to login. 
describe('My First Test', () => {
    it('Visit Habitica.com and click on login', () => {
        cy.fixture('users.json').then(credentials => {
            cy.login(credentials.username, credentials.password)  
        })
        cy.welcomeBack()
    })  
    
})