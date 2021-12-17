FROM ubuntu

WORKDIR /

RUN composer create-project --prefer-dist wordplate/wordplate ./headlessCMS

WORKDIR /headlessCMS

RUN php -S localhost:3000 -t public/

WORKDIR /

RUN npm run develop -w website
