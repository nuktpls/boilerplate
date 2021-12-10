# Tema de Integração

Desenvolvido em Wordpress utilizando roots/sage

## Configurações de ambiente

Na raiz do projeto existe um arquivo chamado `.env`, onde possui todas informações importantes em variáveis globais do arquivo `wp-config.php`.

## Instalando dependências globais

Siga as intruções antes de começar a desenvolver no projeto:

- Instalar [Docker Compose](https://docs.docker.com/compose/install) seguindo as instruções em https://docs.docker.com/compose/install
- Instalar [Composer](https://getcomposer.org/download) seguindo as instruções em https://getcomposer.org/download/
- Instalar [Yarn](https://classic.yarnpkg.com/en/docs/install) em sua maquina local

        npm install -g yarn

## Configurando o projeto

Após ter instalado todas as dependências globais em sua máquina, já podemos inicializar o projeto utilizando os seguintes comandos:

1.  Crie um arquivo chamado `auth.json` e adicione o trecho abaixo, substituindo por um token do [github](https://github.com/settings/tokens):

        {
                "github-oauth": {
                        "github.com": "seu_token_aqui"
                }
        }

2.  Na raiz do projeto, execute o comando a seguir para baixar o Wordpress, plugins e temas do projeto:

        docker-compose up

3.  Importe o dump do banco de dados executando o comando:
    cat dump.sql | docker exec -i tema-de-integracao_db mysql -u root --password=INTegrapassword321 tema-de-integracao

## Acessos

- Site: http://localhost/
- Site com hot reload: http://localhost:3000/
- Browsersync dashboard: http://localhost:3001/
- phpMyAdmin: http://localhost:8080/
- - Login: root
- - Senha: INTegrapassword321
- Painel: http://localhost/wp-admin/
- - Login: studio
- - Senha: INTegrapassword321

## Importando banco de dados

Para importar o banco de dados utilize o comando a seguir na raiz do projeto já com todos os containers rodando:

```sh
cat dump.sql | docker exec -i tema-de-integracao_db mysql -u root --password=INTegrapassword321 tema-de-integracao
```

## Exportando banco de dados

Caso queira exportar o banco de dados no repositório como `dump.sql`, utilize o comando abaixo na raiz do projeto que o arquivo de backup será atualizado:

```sh
docker exec tema-de-integracao_db mysqldump -u root --password=INTegrapassword321 tema-de-integracao > dump.sql
```
