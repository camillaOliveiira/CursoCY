/// <references types="Cypress" />

import LoginElements from "../elements/login";
//instancia
const loginElements = new LoginElements;
//classe
class LoginPage {
    //funcoes ()
    acessarHomePage(){
        cy.visit('www.site.com.br')
    }

    preencherDadoNaTela(){
        //importa os elementos ja mapeados classe.elementoMapeado
        cy.get(loginElements.inputEmail()).type('endereco@email.com')
        cy.get(loginElements.inputPass()).type('senha')
    }

    clickEmLogin() {
        cy.get(loginElements.btnEnter()).click()
    }
}