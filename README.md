# boilerplate
Edu4Dev boilerplate

Para rodar o website junto com o tema, agora o comando da CLI do Gatsbyjs muda para algo como:

npm run develop -w website

Na flag -w indico o nome do workspace que coincide com as estruturas de pastas que estou montando. 
E por meio do npm run develop faço a construção do ambiente de desenvolvimento, equivalente ao código gatsby develop.

## Exemplo de código

Abaixo descrevo que dentro do meu diretório de pastas e arquivos, onde vou começar a trabalhar, existe uma arquitetura contendo três pastas, a saber: 
theme, website e wp-backend.

Na raiz do projeto o package.json indico a estrutura:


{
  "name": "myworkspace",
  "private": true,
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "repository": {
    "url": "https://github.com/nuktpls/not-yet",
    "type": "git"
  },
  "scripts": {
    "build": "yarn workspace website develop"
  },
  "workspaces": [
    "theme",
    "website",
    "wp-backend"
  ]
}

Dentro de website, em um package.json fica a minha instalação das engines do gatsby, do react e dependências que não são do tema em si.

{
  "name": "website",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "develop": "gatsby develop",
    "build": "gatsby build"
  },
  "dependencies": {
    "gatsby": "^4.3.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "theme": "1.0.0"
  }
}

No diretório da engine do website a chamada do tema é feita por meio de um arquivo de configurações na seção de plugins. O arquivo é o gatsby-config.js:

module.exports = {
  plugins: ["theme"],
};

A pasta theme leva também um package.json dessa maneira:

{
  "name": "theme",
  "version": "1.0.0",
  "main": "gatsby-config.js",
  "license": "MIT",
  "dependencies": {
    "gatsby-atomic-block": "^0.2.5",
    "gatsby-layout-builder": "^0.2.6"
  },
  "peerDependencies": {
    "gatsby": "^4.3.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  }
}

Note as dependências chamadas peer, o tema usará as dependências centralizadas e não  criará multiplos diretórios de módulos nodes.

Ferramentas como gatsby-atomic-block, gatsby-layout-builder, que servem para você moldar o seu tema, podem ser instaladas dentro do workspace do tema com o seguinte comando:

npm i gatsby-atomic-block -w theme

## O que vem a seguir

A integração que estou fazendo é para criar um módulo que integra Sage, Wordpress, WooCommerce  e Gatsbyjs.
