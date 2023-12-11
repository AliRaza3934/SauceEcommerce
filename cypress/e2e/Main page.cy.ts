///<refernce types="cypress"/>
import{login} from "./Pages/loginpage"


it('login test',() =>{
   cy.visit("https://www.saucedemo.com/")
   cy.screenshot()
   .wait(300)
   login.loginUser()
   cy.screenshot()
})

