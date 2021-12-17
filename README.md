![example workflow](https://github.com/nuktpls/boilerplate/actions/workflows/develop.yaml/badge.svg)

# boilerplate

Edu4Dev boilerplate

![room boilerplate](https://i.imgur.com/v6n0GWF.png)

Para rodar o website junto com o tema, agora o comando da CLI do Gatsbyjs muda para algo como:

npm run develop -w website

Na flag -w indico o nome do workspace que coincide com as estruturas de pastas que estou montando.
E por meio do npm run develop faço a construção do ambiente de desenvolvimento, equivalente ao código gatsby develop.

## Exemplo de código

Abaixo descrevo que dentro do meu diretório de pastas e arquivos, onde vou começar a trabalhar, existe uma arquitetura contendo três pastas, a saber:
theme, website e wp-backend.

Na raiz do projeto o package.json indico a estrutura:

```json
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
	"workspaces": ["theme", "website", "wp-backend"]
}
```

Dentro de website, em um package.json fica a minha instalação das engines do gatsby, do react e dependências que não são do tema em si.

```json
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
```

No diretório da engine do website a chamada do tema é feita por meio de um arquivo de configurações na seção de plugins. O arquivo é o gatsby-config.js:

```js
module.exports = {
	plugins: ['theme'],
}
```

A pasta theme leva também um package.json dessa maneira:

```json
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
```

Note as dependências chamadas peer, o tema usará as dependências centralizadas e não criará multiplos diretórios de módulos nodes.

Ferramentas como gatsby-atomic-block, gatsby-layout-builder, que servem para você moldar o seu tema, podem ser instaladas dentro do workspace do tema com o seguinte comando:

npm i gatsby-atomic-block -w theme

# Boilerplate 4 Dev

## 🚀 Para iniciar localmente

0.  **Pré-requisitos**

    Este boilerplate foi construído pelo autor Milton Bolonha. Com fins pedagógicos, pode ser explorado comercialmente de acordo com as nossas políticas e termos de uso deste sistemas cibernetizado de códigos público.

    As seguintes tecnologias lideram este desenvolvimento:

    - shell;
    - linux/ubuntu;
    - git;
    - vps;
    - JSON;
    - Markdown;
    - prettier;
    - javascript;
    - npm;
    - workspace;
    - nodejs;
    - gatsby-cli;
    - reactjs;
    - sass;
    - wordpress;
    - sager;

    Tecnologias opcionais:

    - nginx;
    - docker;
    - docker-compose;
    - meli/caddy;
    - gitea;

1.  **Crie um site em Gatsby usando o git da Edu4Dev.**

    Use a CLI do Gatsby para gerar um novo site/

    ```shell
    # certifique-se de ter o Gatsby instalado e atualizado
    # digite o comando
    	npm install -g gatsby-cli

    # neste ponto você está apto a baixar o projeto localmente
    # digite o comando
    	gatsby new boilerplate https://github.com/nuktpls/boilerplate

    # você vai precisar das credenciais corretas para baixar
    # uma vez que é um repositório privado

    ```

2.  **Desenvolvimento e Deploy**

    Para acessar o diretório e rodar o projeto.

    ```shell
    # acesse os arquivos que estão no diretório /boilerplate/
    # digite o comando
        cd boilerplate/

    # adicione o repo nas configs do git
        git remote add origin https://github.com/nuktpls/boilerplate.git

    # atualize o seu repo local de acordo com o do github/nuktpls
    # você irá precisar das credenciais aqui
        git fetch origin

    # neste momento você deve mudar para a branch de desenvolvimento
        git checkout feature/setup-react-gatsby

    # instale os pacotes npm
        npm i

    # para iniciar o App localmente
        gatsby develop
    	# você pode usar também o npm run develop, mas recomendo o padrão

    # para buildar o App na pasta public
        gatsby build

    # para limpar o cache
        gatsby clean
    ```

3.  **Servindo na 8000**

    O Seu site está rodando no endereço http://localhost:8000

    Edite o arquivo `src/pages/index.js` e veja o site sendo atualizado em tempo real.

## Organização do Tema

    ./theme
    ├── 📂/src
    ├──── 📂/scss
    ├─────── style.scss
    ├─────── 📂/global
    ├─────── 📂/helpers
    ├─────── 📂/modules
    ├───────── 📂/layout
    ├─────── 📂/objects
    ├─────── 📂/pages
    ├──── 📂/modules
    ├─────── 📂/global
    ├──── 📂/pages
    ├──── 📂/tools
    └──📂/static
