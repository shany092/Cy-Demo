
it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.wait(7000)
    cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > ul > :nth-child(3)')
    .contains('within').click()
    cy.wait(7000).get('#query-btn')
    // implicit assertions
    .should ('contain','Button')
    .should ('have.class','query-btn btn btn-primary')
    .should ('be.visible',)
   // .should ('be.disabled')
    .and ('be.enabled')
    // explicit assertions
     expect (true).to.be.true

  })
