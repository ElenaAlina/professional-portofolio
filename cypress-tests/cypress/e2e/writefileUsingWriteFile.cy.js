/// <"reference_types" = "cypress/>

it('Write a File using writeFile()', function(){
    cy.writeFile('sample.txt', 'Hello, This sample file is created automatically with this input!\n')
    //\n is used to create a new line in the file, so that the next input will be on a new line

    //the below command overrites the content of the file with the new input
    //cy.writeFile('sample.txt', 'I am learning Cypress!')

    //to append the content to the existing file, we can use the flag {flag: 'a+'}
    cy.writeFile('sample.txt', 'I am learning Cypress!', {flag:'a+'})
})