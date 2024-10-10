# CursoCY - Udemy 
@camillaOliveiira 
###### Iniciado 01.10.2024

## Automação WEB - Cypress +Cucumber

### Introdução a qualidade e testes de Software
- Teste - passo a passo, investigação
- ISO/IEC 9126
- Pressman (1994) Documentação

### CTFL :fa-graduation-cap:
- [Syllabus](https://bstqb.online/ctfl)


### 7 principios da qualidade de software;
1. O teste mostra a presença de defeitos e não sua ausencia;
2. Testes exaustivos são impossiveis;
3. O teste inicial economiza tempo e dinheiro;
4. Defeitos se agrupam;
5. Cuidado com o paradoxo do pesticida:
5.1 Não usar a mesma massa de teste. Sempre usar diferentes massas;
5.2 Não insistir no mesmo.
6. O teste depende do contexto;
7. Ausencia de erros é uma ilusão.

## Cypress - Install
Nescessário:
- VSCode
- Node.js


Terminal:
### Configurando o Ambiente :gear: ###

#### Iniciando o projeto ####

1. Faça um clone do projeto:
2. Instale o Node.js no computador
3. Instale o Vs code para gerenciar os arquivos do projeto
4. No terminal, com a tecla (CTRL + aspas simples) abra o terminal do VS code
5. Navegue até a pasta onde clonou o repositório (Utilize ls para listar e cd nome da pasta para entra) e execute os seguintes comandos:
```shell
    npm install
    npm init
    npm install cypress --save-dev
    npm install cypress-cucumber-preprocessor --save-dev
    npm install blob-util --save-dev
    npm i cypress-intercept-formdata
    npm install cypress-form-data  
    npm install form-data  
```
6. Iniciar o Cypress
```shell
   npx cypress open
```