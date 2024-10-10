/// <reference types="Cypress"/>
import DashLogin from "../pages/desafio_dois_login_page";
const dashLogin = new DashLogin

Given(/^que eu queira acessar a pagina de login adm$/, () => {
	dashLogin.EnterPage()
	return true;
});

When(/^eu inserir meu email "([^"]*)" e senha "([^"]*)"$/, (args1,args2) => {
	console.log(args1,args2);
	return true;
});

When(/^clico no botao de submit$/, () => {
	return true;
});

Then(/^tenho meu login efetuado$/, () => {
	return true;
});
