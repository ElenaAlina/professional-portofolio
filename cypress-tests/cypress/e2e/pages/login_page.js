
// 2nd version and more correct one to be used
export class LofinPage{
    //define the variables to not hardcode the values and make it more dynamic and reusable
    username_textbox = '[name="username"]'
    password_textbox = '[name="password"]'
    login_button = '.oxd-button'

    enterUsername(useer){
        //I can use anything instead of username as long as it is consistent in the function
        //it is just a parameter name
        //cy.get('[name="username"]').type(useer)
        cy.get(this.username_textbox).type(useer)
    }
    enterPassword(password){
        //cy.get('[name="password"]').type(password)
        cy.get(this.password_textbox).type(password)
    }
    /*
    //these are hardcoded values, we can also pass the values as parameters to make it more dynamic
    enterUsername(){
    cy.get('[name="username"]').type('Admin')
    }
    enterPassword(){
    cy.get('[name="password"]').type('admin123')}
    */
    clickLogin(){
        //cy.get('.oxd-button').click()
        cy.get(this.login_button).click()
    }
}
// 1st way to do it
/*
export class LoginPage{
    enterUsername(){
        cy.get('[name="username"]').type(username)
    }
    enterPassword(){
        cy.get('[name="password').type('admin123')
    }
    clickLogin(){
        cy.get('.oxd-button').click()
    }*/
    //or add all of the above in a single function such as:
    /*
    login(){
    cy.get('[name="username"]').type('Admin')
    cy.get('[]name="password').type('admin123')
    cy.get('.oxd-button').click()
    }
    */
//}