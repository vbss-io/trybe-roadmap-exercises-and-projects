FROM mjgargani/puppeteer:trybe1.0
WORKDIR /todo-app/tests

ADD node_modules.tar.gz .
COPY e2e/ e2e
COPY jest* pa* ./

ENTRYPOINT [ "npm", "test" ]