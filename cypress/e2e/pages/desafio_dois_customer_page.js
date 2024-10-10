/// <reference types="Cypress"/>
import cypress from "cypress";
import PageCustomer from "../elements/desafio_dois_customer_elements";
import DashLogin from "./desafio_dois_login_page";
const pageCustomer = new PageCustomer
const dashLogin = new DashLogin

export default class EditCustomer {
    selectMenu() {
        cy.get(pageCustomer.BtnUsers()).click();
        cy.get(pageCustomer.BtnCustomers()).click();
        cy.get(pageCustomer.BtnAdd()).click();
    }
    registerCustomerStatus(status) {
        cy.get(pageCustomer.SelectStatus()).select(status, { force: true});
    }
    registerCustomerPersonal(name, surname, email, password, phone) {
        cy.get(pageCustomer.InputName()).type(name);
        cy.get(pageCustomer.InputLastName()).type(surname);
        cy.get(pageCustomer.InputC_Email()).type(email);
        cy.get(pageCustomer.InputC_Password()).type(password);
        cy.get(pageCustomer.InputC_Phone()).type(phone);
    }
    registerCustomerFinish(type, currency) {
        cy.get(pageCustomer.SelectUserType()).select(type, { force: true});
        cy.get(pageCustomer.SelectCurrency()).select(currency, { force: true});
    }
    SaveBtn(){
        cy.get(pageCustomer.BtnSave()).click;
    }
    VerifyNewUser(email){
        cy.contains(email);
    }
}
