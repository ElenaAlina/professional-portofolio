it('Read and Write files using readFile()', function(){
    cy.readFile('./cypress/fixtures/example.json').then((data) => { 
        cy.log(data.name)
        cy.log(data.email)
    })
})