/// <reference types="Cypress"/>
import RegisterElements from "../elements/register_elements";
const registerElements = new RegisterElements

const url = 'https://demo.automationtesting.in/Register.html'

export default class RegisterPage {

visitPage(){
    cy.visit(url);
}

    fillNameAndSurname(name, surname) {
        cy.get(registerElements.inputFirstName()).type(name);
        cy.get(registerElements.inputLastName()).type(surname);
    }
    fillContacts(address, email, phone) {
        cy.get(registerElements.inputAddress()).type(address);
        cy.get(registerElements.inputAddressEmail()).type(email);
        cy.get(registerElements.inputPhoneNumber()).type(phone);
    }
    selectRadioGender(gender) {
        cy.get(registerElements.checkRadioGender()).check(gender);
    }
    selectCheckHobbies(hobbies) {
        cy.get(registerElements.checkHobbies()).check(hobbies);
    }
    selectLanguages() {

    }
    selectSkills(skill) {
        cy.get(registerElements.inputSkills()).select(skill);
    }
    selectCountry(country) {
        cy.get(registerElements.selectCountry()).select(country, {force: true});
    }
    selectBirthday(year, month, day) {
        cy.get(registerElements.selectYear()).select(year);
        cy.get(registerElements.selectMonth()).select(month);
        cy.get(registerElements.selectDay()).select(day);
    }
    inputPasswords(pass, confirmPass) {
        cy.get(registerElements.inputPass()).type(pass);
        cy.get(registerElements.inputConfirmPass()).type(confirmPass);
    }
    btnSubmit(){
        cy.get(registerElements.submitRegister()).click();
    }
    btnRefresh(){
        cy.get(registerElements.refreshRegister()).click();
    }
    selectImage(){
        cy.get(registerElements.selectFile()).selectFile('cypress/fixtures/Astro.jpeg');
    }
}