FROM ubuntu

WORKDIR /

RUN composer create-project --prefer-dist wordplate/wordplate ./headlessCMS

WORKDIR /

RUN php -S localhost:3000 -t public/
