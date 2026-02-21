/// <reference types="cypress"/>

it('Google Search', () => {
    cy.visit('https://www.google.com/')
    cy.get('#L2AGLb > .QS5gu').click()

    cy.get('[name="q"]').type('Cypress Testing')

    cy.get('.FPdoLc > center > [name="btnK"]')
})