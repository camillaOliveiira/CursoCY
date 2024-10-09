/// <reference types="Cypress"/>
import DashLogin from "../pages/desafio_dois_login_page";
const dashLogin = new DashLogin


Given(/^que eu queira acessar a pagina de login adm$/, () => {
	dashLogin.EnterPage()
});

When(/^eu inserir meu email "([^"]*)" e senha "([^"]*)"$/, (email,password) => {
	console.log(email,password);
	dashLogin.inputLogin(email,password)
});

When(/^clico no botao de submit$/, () => {
	dashLogin.btnSubmit()
});

Then(/^tenho meu login "([^"]*)"$/, (mensagem) => {
	console.log(mensagem);
    dashLogin.ValidLogin
	
});
