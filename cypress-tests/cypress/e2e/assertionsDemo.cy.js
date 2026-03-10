it('Assertions Demo',() => {
    cy.visit('https://example.cypress.io')

    cy.contains('get').click()

    //implicit assertions
    //add assertion .should

    cy.get('#query-btn')
    .should('contain','Button')

    /*
    .should('have.class','query-btn')
    .should('be.visible')
    .should('be.enabled')
    */
   //to not set on each should, I can chain the assertions with and
   .and('have.class','query-btn')
   .and('be.visible')
   .and('be.enabled')
})