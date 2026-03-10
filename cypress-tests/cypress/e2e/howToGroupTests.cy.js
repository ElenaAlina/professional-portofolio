//insert the Login details using the LoginPage class
import {LoginPage} from './pages/login_page'

//create an object of the LoginPage class and we set it to const so that is not changed by mistake
const loginPage2 = new LoginPage()
describe('All Login Tests Block', function(){

    it('Login Test 1', function(){
        cy.visit('https://opensource-demo.orangehrmlive.com')
        loginPage2.enterUsername('Admin')
        loginPage2.enterPassword('admin123')
        loginPage2.clickLogin()
        cy.get(':nth-child(1) > .oxd-main-menu-item').should('be.visible')
        cy.get('nth-child(6) > .oxd-main-menu-item > .oxd-text').click()
    })

it.skip('Login Test 2', function(){
        cy.visit('https://opensource-demo.orangehrmlive.com')
        loginPage2.enterUsername('Admin')
        loginPage2.enterPassword('admin123')
        loginPage2.clickLogin()
        //cy.get(':nth-child(1) > .oxd-main-menu-item').should('be.visible')
        //cy.get('nth-child(6) > .oxd-main-menu-item > .oxd-text').click()
})

it('Login Test 3', function(){
        cy.visit('https://opensource-demo.orangehrmlive.com')
        loginPage2.enterUsername('Admin')
        loginPage2.enterPassword('admin123')
        loginPage2.clickLogin()
        //cy.get(':nth-child(1) > .oxd-main-menu-item').should('be.visible')
        //cy.get('nth-child(6) > .oxd-main-menu-item > .oxd-text').click()
})
})