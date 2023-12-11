///<refernce types="cypress"/>
import{login} from "./Pages/loginpage"


it('login test',() =>{
   cy.visit("https://www.saucedemo.com/")
   .wait(300);
   login.loginUser();
})

