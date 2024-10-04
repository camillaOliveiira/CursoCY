/*/// <reference types="Cypress" />

import LoginElements from "../elements/login";
//instancia
const loginElements = new LoginElements;
//classe
class LoginPage {
    //funcoes ()
    acessarHomePage() {
        cy.visit('www.site.com.br')
    }

    preencherDadosNaTela() {
        //importa os elementos ja mapeados classe.elementoMapeado
        cy.get(loginElements.inputEmail()).type('endereco@email.com')
        cy.get(loginElements.inputPass()).type('senha')
    }

    clickEmLogin() {
        cy.get(loginElements.btnEnter()).click()
    }
} export default LoginPage()*/
/// <reference types="Cypress" />
import HomeElements from "../elements/home_elements";
import LoginElements from "../elements/login_elements";

const loginElements = new LoginElements
const homeElements = new HomeElements

const url = Cypress.config('baseUrl')

class LoginPage {

    accessHomePage() {
        //abre a pagina
        cy.visit(url);
        cy.wait(3000);
        //clicar em hide no popup de cookies
        cy.get(homeElements.btnHideCookie()).click();
    }

    accessLoginPage() {
        //quando se trata de texto usamos o cy.contains = contem
        cy.contains(homeElements.selectAccount()).click();
        cy.contains(homeElements.btnLogin()).click();
    }

    fillLoginInfo(email, password) {
        cy.get(loginElements.inputEmail()).type(email);
        cy.get(loginElements.inputPassword()).type(password);
    }

    submitLogin() {
        cy.get(loginElements.submitLogin()).click();
    }

} export default LoginPage