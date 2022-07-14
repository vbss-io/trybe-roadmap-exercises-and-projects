FROM node:14-alpine
WORKDIR /todo-app/front-end

EXPOSE 3000

ADD node_modules.tar.gz  .
COPY src/ src
COPY public/ public
COPY .env pa* ./

ENTRYPOINT [ "npm", "start" ]