# Teste no Angular.JS

Este repositório contém os arquivos utilizados na palestra "Teste unitário no Angular.js"
apresentada no DevFest 2014 de São paulo.

Tenha certeza de que você possui instalado em sua máquina o Node.js

## Slides da palestra
Os slides e o ultimo texto-rascunho utilizado na palestra
estão localizados na pasta "Apresentação".
Ambos foram editados utilizando o Google Drive, então
caso não tenha o software de edição/visualização dos documentos
você pode fazer o upload para seu Drive pessoal e visualizar a partir de lá.

## Como utilizar

Baixe o repositório numa pasta qualquer:
`$ git clone https://github.com/nawarian/sp-devfest-2014 todomvc-com-testes`

Entre na pasta e inicie o servidor http:
`$ cd todomvc-com-testes`
`$ npm start`

Ao executar o comando npm start, o node irá instalar as dependências do projeto,
executar pela primeira vez o Karma e inicializar o servidor http na porta 8000.

Você pode, portanto, abrir em seu navegador o endereço `http://localhost:8000`

Para executar os testes de interface, usando o protractor, mantenha o servidor ligado
e execute em outro terminal:

`$ npm run protractor`

A primeira execução de cada comando pode demorar uns instantes, pois instalam dependências.

-------

Dúvidas?
Poste uma issue neste repositório ou me mande um e-mail: nawarian@gmail.com
