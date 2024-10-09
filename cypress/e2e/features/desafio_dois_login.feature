Feature: Login ADM

    Logar na pagina Administrators da pagina web PHPTRAVELS

        Scenario Outline: Login na pagina ADM
            Given que eu queira acessar a pagina de login adm
             When eu inserir meu email "<email>" e senha "<password>"
              And clico no botao de submit
             Then tenho meu login "<mensagem>"

        Examples:
                  | email                | password  | mensagem              |
                  | admin@phptravels.com | demoadmin | efetuado com sucesso! |