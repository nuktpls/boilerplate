FROM  node:14-buster

RUN yarn global add gatsby-cli

WORKDIR /app

COPY . ./

RUN yarn install

RUN git config core.ignorecase false

RUN gatsby clean

RUN gatsby build

CMD ["/bin/bash", "-c", "gatsby serve --host 0.0.0.0 --port 9000"]
