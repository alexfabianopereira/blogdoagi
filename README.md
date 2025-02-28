#Testes Automatizados com Cypress - Blog do Agi

Este repositório contém a automação de testes para a funcionalidade de pesquisa do Blog do Agi (https://blogdoagi.com.br/) utilizando o framework Cypress.

📌 Pré-requisitos

Antes de executar os testes, certifique-se de ter instalado:

Node.js (versão 14 ou superior)

npm 

Cypress

Configuração do projeto

Clone este repositório:

git clone https://github.com/alexfabianopereira/blogdoagi.git

Instale as dependências do Cypress:

npm install

Abra o Cypress:

npx cypress open

Execute os testes na interface interativa ou via terminal:

npx cypress run

Cenários de Teste

Os testes implementados cobrem os seguintes cenários:

Pesquisa válida: Verifica se ao buscar um termo existente, os resultados são exibidos corretamente.

Pesquisa inválida: Valida se ao buscar um termo sem resultados, uma mensagem de "Nenhum resultado" é exibida.

Pesquisa com caracteres especiais: Garante que caracteres especiais não causem falhas na pesquisa.

Pesquisa em branco: Confirma que ao buscar sem inserir um termo, são exibidos resultados padrão, como "Agibank".

                    # Documentação do projeto

 Configuração para CI/CD

Caso deseje rodar os testes em um pipeline de CI/CD, adicione o seguinte comando ao seu arquivo de configuração:

npx cypress run --headless

Considerações finais

Este projeto segue as melhores práticas de automação de testes com Cypress.
