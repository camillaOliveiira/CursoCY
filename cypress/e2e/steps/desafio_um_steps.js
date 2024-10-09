/// <reference types="Cypress"/>
import ReqForm from "../pages/desafio_um_page";
const reqForm = new ReqForm


Given(/^que eu estou na pagina web$/, () => {
	reqForm.visitPage()
});

When(/^eu preencher as informacoes de "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)" e "([^"]*)"$/, (name,lastname,country,wppnumber,businessname,email) => {
	console.log(name,lastname,country,wppnumber,businessname,email);
    reqForm.inputName(name)
    reqForm.inputLastName(lastname)
    reqForm.selectCounty(country)
    reqForm.inputWppNumber(wppnumber)
    reqForm.inputBusinessName(businessname)
    reqForm.inputEmail(email)
});


When(/^responder o desafio resultado = "([^"]*)"$/, (nresult) => {
	console.log(nresult);
	reqForm.inputDesafio(nresult)
});

When(/^eu clico no botao Submit$/, () => {
	reqForm.BtnSubmit
});

Then(/^"([^"]*)"$/, (mensagem) => {
	console.log(mensagem);
	
});
