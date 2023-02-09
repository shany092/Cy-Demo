/// <reference types= "cypress"/>
// searching on google
it('Google Search', () =>{

cy.visit('https://google.com')
cy.get('.gLFyf').type('cypress documentation{enter}')
cy.get('.FPdoLc > center > .gNO89b').click()
})