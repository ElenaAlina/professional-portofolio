before(function(){
    cy.fixture('example.json').as('test_data')   
    //as('test_data') is an alias for the fixture file, so we can use it in our test case

    //also work using just example instead of example.json
    //cy.fixture('example.json').as('test_data')
})
it('Read files using Fixture', function(){

    //I set the name of the file from fixtures: example.json
    //then lets you chain the output from a previous command into the next command using .then() function, 
    //meaning the output of the example.json file
    cy.fixture('example.json').then((data) => {
        cy.log(data.name)
        cy.log (data.email)
    })
    cy.log(this.test_data.name)
    cy.log(this.test_data.email)
})