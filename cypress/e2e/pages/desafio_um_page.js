/// <reference types="Cypress"/>
import RequestForm from "../elements/desafio_um_elements";
const requestForm = new RequestForm
const url = 'https://phptravels.com/demo/'

export default class ReqForm {
    visitPage() {
        cy.visit(url);
    }
    inputName(name) {
        cy.get(requestForm.FirstName()).type(name);
    }
    inputLastName(lastname) {
        cy.get(requestForm.LastName()).type(lastname);
    }
    selectCounty(country){
        cy.get(requestForm.SelectCountry()).select(country);
    }
    inputWppNumber(wppnumber){
        cy.get(requestForm.WppNumber()).type(wppnumber);
    }
    inputBusinessName(businessname){
        cy.get(requestForm.BusinessName()).type(businessname);
    }
    inputEmail(email){
        cy.get(requestForm.InputEmail()).type(email);
    }
    inputDesafio(){
        //Quando tiver algum desafio que nescessite ler uma pergunta aleatoria e digitar uma resposta
        var number1
        var number2
        var result
        cy.get(requestForm.DesafioN1()).invoke('text').then(numberText1 =>{
            //parseInt = transforma texto para numero
            //parserfloat = transforma numero para texto
            number1 = parseInt(numberText1);
            cy.get(requestForm.DesafioN2()).invoke('text').then(numberText2 => {
                number2 = parseInt(numberText2);
                result = number1 + number2
                cy.log('Resultado e: ' + result);
                cy.get(requestForm.DesafioResult()).type(result);
            });
        });
    }
    BtnSubmit(){
        cy.get(requestForm.BtnSubmit()).click();
    }
}