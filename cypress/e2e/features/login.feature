Feature: Login
    Login para acesso ao AP

        Scenario: Login com sucesso
            Given que eu queira acessar o sistema
             When eu inserir meu login e senha
              And clicar no botão entrar
             Then tenho meu acesso realizado com sucesso

    //Para não repetir o BDD para variações de cenarios

        Scenario Outline: Login
            Given que eu queira acessar o sistema
             When eu inserir meu login "<login>" e senha "<senha>"
              And clicar no botão entrar
             Then tenho meu acesso "<mensagem>"

        Examples:
                  | login  | senha | mensagem                  |
                  | camila | 1234  | Login com sucesso         |
                  | fulano | 0000  | Login com senha incorreta |