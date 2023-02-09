/// <reference types = "cypress"/>
/// <reference types = "cypress-downloadfile"/>

it('File upload test', function(){
    cy.visit('https://trytestingthis.netlify.app/')
    cy.get('#myfile').attachFile('2023-02-08 010029')

})
it('File down load test', () =>{
cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','fixtures','example.jpg','MyCustomAgentName')
})