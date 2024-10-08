/// <reference types="cypress"/>
import LoginPage from "../pages/login_page";
const loginPage = new LoginPage


Given(/^que eu acesse a pagina home da aplicação$/, () => {
	LoginPage.accessHomePage()
});

When(/^eu inserir meu email "([^"]*)" e senha "([^"]*)"$/, (email, password) => {
	console.log(email,password);
	LoginPage.accessLoginPage()
    LoginPage.fillLoginInfo(email, password)
});

When(/^clicar no botão entrar$/, () => {
	LoginPage.submitLogin()
});

Then(/^tenho meu acesso "([^"]*)"$/, (mensagem) => {
	console.log(mensagem);
    //cy.contains('Dashboard');

});
