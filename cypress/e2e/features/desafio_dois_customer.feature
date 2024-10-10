Feature: Registro de um novo User Customer

    Registrar novos users Customers e validar na lista

        Scenario Outline: Novo User Customer
            Given que eu esteja na pagina de login adm
              And eu inserir meu email "<email_login>" e senha "<password_login>"
              And clico no botao de submit
              And tenho meu login efetuado
             When clico em users, Customers e add
              And selecicono status "<status>"
              And preencho as informacoes pessoais "<name>", "<surname>", "<email>", "<password>" e "<phone>"
              And seleciono o tipo de usuario "<type>" e currency "<currency>"
              And clico no botao Save
             Then usuario "<email>" deve aparecer na lista de users


        Examples:
                  | email_login          | password_login | status  | name   | surname | email             | password  | phone       | type     | currency |
                  | admin@phptravels.com | demoadmin      | Enabled | Camila | Oliver  | cml.cmy@gmail.com | password2 | 11982063918 | Customer | USD      |
