//insert the Login details using the LoginPage class
import {LoginPage} from './pages/login_page'

//create an object of the LoginPage class and we set it to const so that is not changed by mistake
const loginPage = new LoginPage()

it('Page Object Model', function(){

    cy.visit('https://opensource-demo.orangehrmlive.com')
    loginPage.enterUsername('Admin')
    loginPage.enterPassword('admin123')
    loginPage.clickLogin()

    //the Login page 1st version
    /*
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
    cy.get('.oxd-button').click()

    //2nd version
    cy.get('#tstUsername').type('Admin')   
    cy.get('#txtPassword').type('admin123')
    cy.get('#btnLogin').click()*/
})