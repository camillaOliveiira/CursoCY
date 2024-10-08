Feature: Cadastro de usuarios
    Cadastro de usuarios
        Scenario Outline: "<caso_teste>"
            Given que estamos na page de cadasttro
              And inserimos nosso nome "<name>" e sobrenome "<surname>"
              And informarmos nossos dados de contato "<address>", "<email>" e "<phone>"
              And nosso genero como "<gender>" e hobbies "<hobbies>"
              And nossas skilss "<skill>" e nosso pais "<contry>"
             When eu selecionar meu nascimento "<year>", "<month>" e "<day>"
              And inserir minha senha "<pass>" e "<confirm_Pass>"
              And clico no botao cadastrar
             Then tenho meu cadastro "<mensagem>".

        Examples:
                  | caso_teste                    | name    | surname  | address    | email            | phone       | gender | hobbies | skill      | contry    | year | month   | day | pass      | confirm_Pass | mensagem             |
                  | Registro com sucesso - FeMale | Camila  | Oliveira | Rua teste  | camila@teste.com | 11982063918 | FeMale | Movies  | Javascript | Australia | 1995 | January | 4   | Password1 | Password1    | Registro com sucesso |
                  | Registro com sucesso - Male   | Gabriel | Lima     | Rua fulano | gabs@teste.com   | 11977778888 | Male   | Movies  | C          | Australia | 1990 | April   | 17  | Password2 | Password2    | Registro com sucesso |
                  | Registro Invalido             | aa      | Lima     | Rua fulano | gabs@            | 22          | Male   | Movies  | C          | Australia | 1990 | April   | 17  | Password2 | Passwo       | Registro Invalido    |
