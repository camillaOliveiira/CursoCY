/// <reference types="Cypress"/>
import DashElements from "../elements/desafio_dois_login_elements"
const url = 'https://phptravels.net/admin/login.php'
const dashElements = new DashElements

export default class DashLogin {
     EnterPage(){
        cy.visit(url);
    }
     inputLogin(email, password){
        cy.get(dashElements.InputEmail()).type(email);
        cy.get(dashElements.InputPass()).type(password);
    }
     btnSubmit(){
        cy.get(dashElements.BtnSubmit()).click();
    }
    ValidLogin(Super){
        cy.contains(Super)
    }
}