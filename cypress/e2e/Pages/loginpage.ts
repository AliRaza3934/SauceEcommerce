
let userName="standard_user"
let passWord="secret_sauce"
class LoginPage{

    

    loginLocators={
        userFieldLocator :()    => cy.get("#user-name"),
        passwordFieldLocator:() => cy.get("#password"),
        btnLocator:()=> cy.get("#login-button"),

    }

loginUser(){
    this.loginLocators.userFieldLocator().type(userName)
    this.loginLocators.passwordFieldLocator().type(passWord)
    this.loginLocators.btnLocator().click()

}

}

export let login = new LoginPage();