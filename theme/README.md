# Atomic Theme

[![Ambiente de testes não definido](https://github.com/nuktpls/atomic-theme/actions/workflows/develop.yaml/badge.svg?branch=develop)](https://github.com/nuktpls/atomic-theme/actions/workflows/develop.yaml)

## 🚀 Para iniciar localmente

0.  **Pré-requisitos**

    Este tema foi construído usando o boilerplate do autor Milton Bolonha,
    usado para fins pedagógicos, explorados pelo Instituto Organizacionista.

    As seguintes tecnologias lideram este desenvolvimento:

    - shell;
    - git;
    - vps;
    - javascript;
    - npm;
    - nodejs;
    - gatsby-cli;
    - reactjs;
    - sass;
    - git workflow.

    Tecnologias opcionais:

    - nginx;
    - docker;
    - docker-compose;
    - meli/caddy;
    - gitea;

1.  **Crie um site em Gatsby usando o git da Studio Visual.**

    Use a CLI do Gatsby para gerar um novo site/tema.

    ```shell
    # certifique-se de ter o Gatsby instalado e atualizado
    # digite o comando
    	npm install -g gatsby-cli

    # neste ponto você está apto a baixar o projeto localmente
    # digite o comando
    	gatsby new jogo-da-memoria https://github.com/nuktpls/jogo-da-memoria

    # você vai precisar das credenciais corretas para baixar
    # uma vez que é um repositório privado

    ```

2.  **Desenvolvimento e Deploy**

    Para acessar o diretório e rodar o projeto.

    ```shell
    # acesse os arquivos que estão no diretório /jogo-da-memoria/
    # digite o comando
        cd jogo-da-memoria/

    # adicione o repo nas configs do git
        git remote add origin https://github.com/nuktpls/jogo-da-memoria.git

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

## Organização das Pastas

    ./jogo-da-memoria
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

4.  **Servidor Serverless Meli**

    Sabe o [Netlify](https://netlify.com/)? Então...
    Sugerimos que use um servidor baseado em Caddy, que é o [Meli.sh](http://meli.sh/).
    É baseado no Netlify.

    ![Meli Logotipo](https://docs.meli.sh/img/logo.svg)

    Requisitos:

    - um VPS (Virtual Private Server) / Servidor Virtual Privado

    - Docker e Docker Compose ([ver aqui como instalar no Ubuntu](https://docs.docker.com/engine/install/ubuntu/#install-docker-engine))

    ## 1. Configure DNS

    Configure os registros DNS para apontar para seu VPS. Você deve configurar os domínios principal e o curinga. Supondo que o IP do seu VPS seja 1.2.3.4:

        ```shell
        	meli.dominio.com IN A 1.2.3.4
        	*.meli.dominio.com IN A 1.2.3.4
        ```

    Eu uso assim:

        ```shell
        	poupaluz.meudominio.dev IN A 1.2.3.4
        	*.poupaluz.meudominio.dev IN A 1.2.3.4
        ```

    ## 2. Deploy do Meli na VPS pelo Docker

    Crie um arquivo com o nome docker-compose.yml em algum lugar:

    ```shell
        version: "3"
            services:
                meli:
                    image: getmeli/meli:beta
                    ports:
                        - 80:80 # sequestrando portas principais
                        - 443:443 # sequestrando portas principais
                    environment:
                        # no trailing slash !
                        MELI_URL: https://poupaluz.meudominio.dev
                        MELI_MONGO_URI: mongodb://mongo:27017/meli
                        # openssl rand -hex 32
                        MELI_JWT_SECRET: senhazinhaAQUI
                        # https://docs.meli.sh/authentication
                        MELI_USER: olhaoSEUuserAqui
                        MELI_PASSWORD: senhazinhaAQUI
                            # Máximo de sites por usuário
                            # Padrão: um site por usuário
                            # Zero: desativa a opção e torna ilimitado
                            # MELI_MAX_ORGS=0
                    volumes:
                        - ./data/sites:/sites
                        - ./data/files:/files
                        - ./data/caddy/data:/data
                        - ./data/caddy/config:/config
                    depends_on:
                        - mongo

    			mongo:
                    image: mongo:4.2-bionic
                    restart: unless-stopped
                    volumes:
                        - ./data/mongo:/data/db
    ```

    ## 3. Compondo o Docker

    ```shell

     # Vai dar certo de primeira
     # digite o código
       docker-compose up -d
    ```

    ## 4. Acessando o Poupa Luz

    Acesse poupaluz.meudominio.dev e coloque suas credenciais na página de login

    ## 5. Criando um website e fazendo o deploy manual

    Para fazer o deploy manual você deve criar um site e depois gerar um token no seu Poupa Luz.

    Depois de tê-lo feito rode os seguintes comandos:

    ```shell

       # Faça o build do seu app/site em Gatsby
       # digite o comando
          gatsby build

       # Envie o seu site para o seu servidor Poupa Luz
       # digite o comando
       # AVISO: este comando está fazendo deploy  da branch master
       # AVISO: somente a pasta public será enviada
       # AVISO: ela contém uma SPA Single Page App
       # AVISO: você deve configurar a esteira de deploy
          npx -p "@getmeli/cli" meli upload \
          /home/SEUUSERAQUI/SUAPASTA/PASTADOPROJETOEMGASTBY/public \
          --url https://poupaluz.seudominio.dev \
          --site xxxxxxxxxxxxxxx \
          --token xxxxxxxxxxxxxx \
          --branch "master"
    ```

    ## 6. Definindo variáveis e Habilitando SPA

    Você deve:

    - Definir a sua branch (que irá buildar)
    - Habiltar a função Single page application (SPA) mode
    - Inserir o domínio final
    - Deixar acionado Automatic SSL (ACME)

    ## 7. Deploy automático

    Deploy automático com gitea: [aqui](https://docs.meli.sh/get-started/pr-previews?highlight=deplo#gitea)

    ## Bibliografia

    Testando o Gatsby zerado: [aqui](https://www.gatsbyjs.com/docs/quick-start/)

    Gatsby Oficial Cloud: [aqui](https://www.gatsbyjs.com/products/cloud/)

    Curso de Gatsby: [aqui](https://www.udemy.com/course/gatsby-crie-um-site-pwa-com-react-graphql-e-netlify-cms/) ou [aqui](http://bj-share.info/)

    Instalação do Meli: [aqui](https://docs.meli.sh/get-started/installation)

    Documentação do Meli: [aqui](https://docs.meli.sh/)

    Proxy Reverse do Meli: [aqui](https://docs.meli.sh/configuration/reverse-proxy?highlight=proxy#nginx)

    Let's Encrypt instruções: [aqui](https://docs.meli.sh/configuration/reverse-proxy?highlight=proxy#wildcard-certificates-from-lets-encrypt)

    ## Direitos Autorais

    As únicas entidades a terem o direito sobre o mesmo é o autor e a beneficiada direta (Studio Visual e seus clientes), sendo vedado o uso sobre qualquer maneira do mesmo por terceiros.

    É expressamente proibido divulgar este código em repositório público.

    É expressamente proibido usar este código para fins didáticos pedagógicos.

    É expressamente bem-vindo todo e qualquer contato de interesse ou esclarecimentos.
