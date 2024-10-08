Feature: Login
Funcionalidade para realizar variados logins no sistema PHPTravels

    //Scenario: Login com sucesso
    //Given que eu queira acessar o sistema
    //When eu inserir meu login e senha
    //And clicar no botão entrar
    //Then tenho meu acesso realizado com sucesso

    //Para não repetir o BDD para variações de cenarios

        Scenario Outline: "<cenario>"
            Given que eu acesse a pagina home da aplicação
             When eu inserir meu email "<email>" e senha "<senha>"
              And clicar no botão entrar
             Then tenho meu acesso "<mensagem>"

        Examples:
                  | cenario                                    | email               | senha    | mensagem                  |
                  | Login com sucesso                          | user@phptravels.com | demouser | com sucesso na aplicação  |
                  | Login com senha incorreta                  | user@phptravels.com | 0000     | Login com senha incorreta |
                  | Login com email incorreto                  | fulano@fulano.com   | demouser | Login com senha incorreta |
                  | Login sem preencher os campos obrigatorios |                     |          | Acesso Negado             |
