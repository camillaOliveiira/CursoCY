/// <reference types="Cypress"/>
import RegisterPage from "../pages/register_page";
const registerPage = new RegisterPage


Given(/^que estamos na page de cadasttro$/, () => {
    registerPage.visitPage()
});

Given(/^inserimos nosso nome "([^"]*)" e sobrenome "([^"]*)"$/, (name, surname) => {
    registerPage.fillNameAndSurname(name, surname)
});

Given(/^informarmos nossos dados de contato "([^"]*)", "([^"]*)" e "([^"]*)"$/, (address, email, phone) => {
    registerPage.fillContacts(address, email, phone)
});

Given(/^nosso genero como "([^"]*)" e hobbies "([^"]*)"$/, (gender, hobbies) => {
    registerPage.selectRadioGender(gender)
    registerPage.selectCheckHobbies(hobbies)
});

Given(/^nossas skilss "([^"]*)" e nosso pais "([^"]*)"$/, (skill, country) => {
    registerPage.selectSkills(skill)
    registerPage.selectCountry(country)
});

When(/^eu selecionar meu nascimento "([^"]*)", "([^"]*)" e "([^"]*)"$/, (year, month, day) => {
    registerPage.selectBirthday(year, month, day)

});

When(/^inserir minha senha "([^"]*)" e "([^"]*)"$/, (pass, confirm_Pass) => {
    registerPage.inputPasswords(pass, confirm_Pass)
    registerPage.selectImage()

});

When(/^clico no botao cadastrar$/, () => {
    registerPage.btnSubmit()
});

Then(/^tenho meu cadastro "([^"]*)".$/, (mensagem) => {
    console.log(mensagem);
});

