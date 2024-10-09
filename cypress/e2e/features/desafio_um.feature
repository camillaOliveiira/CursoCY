Feature: Formulario de credencial
    Formulario de requisicao de criacao de credencial de usuarios

        Scenario Outline: "<caso_teste>"
            Given que eu estou na pagina web
             When eu preencher as informacoes de "<name>", "<lastname>", "<country>", "<wppnumber>", "<businessname>" e "<email>"
              And responder o desafio resultado = "<nresult>"
              And eu clico no botao Submit
             Then "<mensagem>"

        Examples:
                  | caso_teste | name   | lastname | country    | wppnumber   | businessname | email          | nresult | mensagem                      |
                  | Sucesso    | Camila | Oliveira | Brazil +55 | 11982063918 | teste S/A    | mila@teste.com | nresult | credencial criada com sucesso |