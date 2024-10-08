/// <reference types="Cypress"/>
import RegisterPage from "../pages/register_page";
const registerPage = new RegisterPage


Given(/^que estamos na page de cadasttro$/, () => {
	registerPage.visitPage()
});

Then(/^inserimos nosso nome "([^"]*)" e sobrenome "([^"]*)"$/, (args1,args2) => {
	console.log(args1,args2);
	
});

Then(/^informarmos nossos dados de contato "([^"]*)", "([^"]*)" e "([^"]*)"$/, (args1,args2,args3) => {
	console.log(args1,args2,args3);
	
});

Then(/^nosso genero como "([^"]*)" e hobbies "([^"]*)"$/, (args1,args2) => {
	console.log(args1,args2);
	
});

Then(/^nossas skilss "([^"]*)" e nosso pais "([^"]*)"$/, (args1,args2) => {
	console.log(args1,args2);
	
});

When(/^eu selecionar meu nascimento "([^"]*)", "([^"]*)" e "([^"]*)"$/, (args1,args2,args3) => {
	console.log(args1,args2,args3);
	
});

When(/^inserir minha senha "([^"]*)" e "([^"]*)"$/, (args1,args2) => {
	console.log(args1,args2);
	
});

When(/^clicar no botao entrar$/, () => {
	
});

Then(/^tenho meu cadastro "([^"]*)".$/, (args1) => {
	console.log(args1);
	
});

